import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {AmenityRequest, AmenityResponse, AmenitiesResponse} from "./Types";
import {tap} from "rxjs/operators";
import {environment} from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {

  public dataResponse: AmenitiesResponse;
  public onChange: BehaviorSubject<AmenitiesResponse>;

  private readonly API_URL = environment.apiUrl + '/amenities';

  constructor(private _httpClient: HttpClient) {
    this.onChange = new BehaviorSubject(null);
    this.fetch();
  }

  public fetch(): Observable<AmenitiesResponse> {
    return this._httpClient.get<AmenitiesResponse>(`${this.API_URL}?size=1000`)
        .pipe(tap((response) => {
          this.dataResponse = response;
          this.onChange.next(this.dataResponse);
        }));
  }

  public add(data: AmenityRequest): Observable<AmenityResponse> {
    console.log(data);
    const formData: any = new FormData();
    for (let key of Object.keys(data)) {
      formData.append(key, data[key]);
    }

    return this._httpClient.post<AmenityResponse>(`${this.API_URL}`, formData)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public delete(id: number): Observable<void> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.delete<void>(url)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public getById(id): Observable<AmenityResponse> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.get<AmenityResponse>(url);
  }

  public update(id, category: AmenityRequest): Observable<AmenityRequest> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.put<AmenityRequest>(url, category);
  }

  public updateStatus(id): Observable<void> {
    let url = `${environment.apiUrl}/update-status/${id}/type`;
    return this._httpClient.put<void>(url,[]);
  }

  resolve(): Observable<AmenitiesResponse> | Promise<AmenitiesResponse> | AmenitiesResponse {
    return this.fetch();
  }
}
