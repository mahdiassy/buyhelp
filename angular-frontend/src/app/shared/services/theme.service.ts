import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ThemesModel } from '../interface/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getThemes(): Observable<ThemesModel> {
    return this.http.get<ThemesModel>(`${environment.URL}/theme`);
  }

  getHomePage(slug?: string): Observable<any> {
    // Make the request even with empty slug to get default data
    const safeSlug = slug || 'default';
    return this.http.get(`${environment.URL}/home?slug=${safeSlug}`);
  }

}
