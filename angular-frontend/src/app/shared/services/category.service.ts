import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { timeout } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { Params } from "../interface/core.interface";
import { Category, CategoryModel } from "../interface/category.interface";

@Injectable({
  providedIn: "root",
})
export class CategoryService {

  public searchSkeleton: boolean = false;
  
  constructor(private http: HttpClient) {}

  getCategories(payload?: Params): Observable<CategoryModel> {
    // Remove status parameter if it exists to avoid database errors
    const safePayload = { ...payload };
    if (safePayload && 'status' in safePayload) {
      delete safePayload['status'];
    }
    return this.http.get<CategoryModel>(`${environment.URL}/category`, { params: safePayload }).pipe(
      timeout(60000) // 60 seconds timeout for categories
    );
  }
  
  getCategoryBySlug(slug: string): Observable<Category> {
    return this.http.get<Category>(`${environment.URL}/category/slug/${slug}`).pipe(
      timeout(60000) // 60 seconds timeout for category by slug
    );
  }
}