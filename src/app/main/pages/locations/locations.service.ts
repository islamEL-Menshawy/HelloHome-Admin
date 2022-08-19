import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {LocationRequest, LocationResponse, LocationsResponse} from "./Types";
import {tap} from "rxjs/operators";
import {environment} from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public dataResponse: LocationsResponse;
  public onChange: BehaviorSubject<LocationsResponse>;

  private readonly API_URL = environment.apiUrl + '/location';

  constructor(private _httpClient: HttpClient) {
    this.onChange = new BehaviorSubject(null);
    this.fetch();
  }

  public fetch(): Observable<LocationsResponse> {
    return this._httpClient.get<LocationsResponse>(`${this.API_URL}?size=1000`)
        .pipe(tap((response) => {
          this.dataResponse = response;
          this.onChange.next(this.dataResponse);
        }));
  }

  public add(type: LocationRequest): Observable<LocationResponse> {
    // console.log(type);
    return this._httpClient.post<LocationResponse>(`${this.API_URL}`, type)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public delete(id: number): Observable<void> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.delete<void>(url)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public getById(id): Observable<LocationResponse> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.get<LocationResponse>(url);
  }

  public update(id, category: LocationRequest): Observable<LocationRequest> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.put<LocationRequest>(url, category);
  }
  public updateStatus(id): Observable<void> {
    let url = `${environment.apiUrl}/update-status/${id}/location`;
    return this._httpClient.put<void>(url,[]);
  }

  resolve(): Observable<LocationsResponse> | Promise<LocationsResponse> | LocationsResponse {
    return this.fetch();
  }
}
