import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {TypeRequest, TypeResponse, TypesResponse} from "./Types";
import {tap} from "rxjs/operators";
import {environment} from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  public dataResponse: TypesResponse;
  public onChange: BehaviorSubject<TypesResponse>;

  private readonly API_URL = environment.apiUrl + '/type';

  constructor(private _httpClient: HttpClient) {
    this.onChange = new BehaviorSubject(null);
    this.fetch();
  }

  public fetch(): Observable<TypesResponse> {
    return this._httpClient.get<TypesResponse>(`${this.API_URL}?size=1000`)
        .pipe(tap((response) => {
          this.dataResponse = response;
          this.onChange.next(this.dataResponse);
        }));
  }

  public add(type: TypeRequest): Observable<TypeResponse> {
    // console.log(type);
    return this._httpClient.post<TypeResponse>(`${this.API_URL}`, type)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public delete(id: number): Observable<void> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.delete<void>(url)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public getById(id): Observable<TypeResponse> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.get<TypeResponse>(url);
  }

  public update(id, category: TypeRequest): Observable<TypeRequest> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.put<TypeRequest>(url, category);
  }

  public updateStatus(id): Observable<void> {
    let url = `${environment.apiUrl}/update-status/${id}/type`;
    return this._httpClient.put<void>(url,[]);
  }

  resolve(): Observable<TypesResponse> | Promise<TypesResponse> | TypesResponse {
    return this.fetch();
  }
}
