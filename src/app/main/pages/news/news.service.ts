import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UnitRequest, UnitResponse} from "../unites/Types";


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly API_URL = environment.apiUrl + '/news';

  constructor(private _httpClient: HttpClient) {
  }


  public fetch(): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL}`);
  }

  public create(data: any): Observable<any> {
    const formData: any = new FormData();
    for (let key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
    return this._httpClient.post<any>(`${this.API_URL}`, formData);
  }
  public getById(id): Observable<any> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.get<any>(url);
  }

  public update(id, unit: any): Observable<any> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.put<any>(url, unit);
  }


  public delete(id: number): Observable<void> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.delete<void>(url);
  }
}
