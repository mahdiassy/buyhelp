import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '../interface/core.interface';
import { Observable } from 'rxjs';
import { Brand, BrandModel } from '../interface/brand.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) {}

  getBrands(payload?: Params): Observable<BrandModel> {
    return this.http.get<BrandModel>(`${environment.URL}/brand`, { params: payload });
  }

  getBrandBySlug(slug: string): Observable<Brand> {
    return this.http.get<Brand>(`${environment.URL}/brand/slug/${slug}`);
  }

}
