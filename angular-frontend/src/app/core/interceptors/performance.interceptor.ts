import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class PerformanceInterceptor implements HttpInterceptor {
  
  private appStartTime = Date.now();
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Only apply in development mode
    if (!environment.production) {
      
      // Check if we're in the startup phase (first 30 seconds)
      const isStartupPhase = (Date.now() - this.appStartTime) < 30000;
      
      let timeoutDuration = 60000; // Default 60 seconds
      let retryCount = 1; // Default 1 retry
      
      if (isStartupPhase) {
        // During startup - very generous timeouts to prevent button functionality issues
        timeoutDuration = 60000; // 60 seconds for all startup calls
        retryCount = 2; // More retries during startup
      } else {
        // After startup - more reasonable timeouts
        timeoutDuration = 30000; // 30 seconds post-startup
        retryCount = 1;
      }
      
      return next.handle(req).pipe(
        timeout(timeoutDuration),
        retry(retryCount),
        catchError((error) => {
          console.warn(`HTTP Request failed after ${timeoutDuration}ms (retries: ${retryCount}):`, req.url, error);
          throw error;
        })
      );
    }
    
    // Production - normal handling
    return next.handle(req);
  }
}