import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {UnitResponse} from "../unites/Types";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private readonly API_URL = environment.apiUrl + '/content';

  constructor(private _httpClient: HttpClient) {
  }

  public getData($page): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL}/get/${$page}`)
        .pipe();
  }

  public getSubData($page): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL}/data/${$page}`)
        .pipe();
  }

  public update(data): Observable<any> {

    let url = `${this.API_URL}/update`;
    return this._httpClient.put<any>(url, { 'data': data});
  }

  public updateImage(key, image): Observable<any> {
    const formData: any = new FormData();
    formData.append("key", key);
    formData.append("image", image);
    return this._httpClient.post<any>(`${this.API_URL}/update-image`, formData)
        .pipe();
  }
}

