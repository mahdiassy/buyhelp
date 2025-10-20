import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GoogleReCaptcha, Setting } from '../interface/setting.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  reCaptchaConfig: GoogleReCaptcha;

  constructor(private http: HttpClient) { }

  getSettingOption(): Observable<Setting> {
    return this.http.get<Setting>(`${environment.URL}/settings`).pipe(
      timeout(60000) // 60 seconds timeout for settings
    );
  }

  async getReCaptchaConfig(): Promise<void> {
    const config = await this.getSettingOption().toPromise();
    this.reCaptchaConfig = config?.values?.google_reCaptcha!;
  }

}
