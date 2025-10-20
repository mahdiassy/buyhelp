import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Blog, BlogModel } from "../interface/blog.interface";
import { Params } from "../interface/core.interface";

@Injectable({
  providedIn: "root",
})
export class BlogService {

  public skeletonLoader: boolean = false;
  
  constructor(private http: HttpClient) {}

  getBlogs(payload?: Params): Observable<BlogModel> {
    // Remove status parameter if it exists to avoid database errors
    const safePayload = { ...payload };
    if (safePayload && 'status' in safePayload) {
      delete safePayload['status'];
    }
    return this.http.get<BlogModel>(`${environment.URL}/blog`, { params: safePayload });
  }

  getBlogBySlug(slug: string): Observable<Blog> {
    return this.http.get<Blog>(`${environment.URL}/blog/slug/${slug}`);
  }

}