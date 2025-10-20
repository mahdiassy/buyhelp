import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { MenuModel } from '../interface/menu.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public skeletonLoader: boolean = false;

  constructor(private http: HttpClient) {}

  getMenu(payload?: Params): Observable<MenuModel> {
    // Try to load menu data without status parameter first
    const safePayload = { ...payload };
    if (safePayload && 'status' in safePayload) {
      delete safePayload['status'];
    }
    return this.http.get<MenuModel>(`${environment.URL}/menu`, { params: safePayload }).pipe(
      timeout(60000) // 60 seconds timeout for menu loading
    );
  }
  
}
