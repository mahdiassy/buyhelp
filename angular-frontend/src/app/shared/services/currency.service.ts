import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { timeout } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { Params } from "../interface/core.interface";
import { CurrencyModel } from "../interface/currency.interface";

@Injectable({
  providedIn: "root",
})
export class CurrencyService {

  public selectedCurrency: any;

  constructor(private http: HttpClient) {}

  getCurrencies(payload?: Params): Observable<CurrencyModel> {
    return this.http.get<CurrencyModel>(`${environment.URL}/currency`, { params: payload }).pipe(
      timeout(60000) // 60 seconds timeout for currencies
    );
  }

}
