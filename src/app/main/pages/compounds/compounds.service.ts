import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CompoundRequest, CompoundResponse, CompoundsResponse} from "./Types";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CompoundsService {
  public dataResponse: CompoundsResponse;
  public onChange: BehaviorSubject<CompoundsResponse>;

  private readonly API_URL = environment.apiUrl + '/compound';

  constructor(private _httpClient: HttpClient) {
    this.onChange = new BehaviorSubject(null);
    this.fetch();
  }

  public fetch(): Observable<CompoundsResponse> {
    return this._httpClient.get<CompoundsResponse>(`${this.API_URL}?size=1000`)
        .pipe(tap((response) => {
          this.dataResponse = response;
          this.onChange.next(this.dataResponse);
        }));
  }

  public add(data: CompoundRequest): Observable<CompoundResponse> {
    const formData: any = new FormData();
    for (let key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
    return this._httpClient.post<CompoundResponse>(`${this.API_URL}`, formData)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public delete(id: number): Observable<void> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.delete<void>(url)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public getById(id): Observable<CompoundResponse> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.get<CompoundResponse>(url);
  }

  public update(id, data: CompoundRequest): Observable<CompoundResponse> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.put<CompoundResponse>(url, data);
  }

  public updateImage(id, image): Observable<void> {
    const formData: any = new FormData();
    formData.append('compound_image', image);
    return this._httpClient.post<void>(`${this.API_URL}/update-image/${id}`, formData)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public updateStatus(id): Observable<void> {
    let url = `${environment.apiUrl}/update-status/${id}/compound`;
    return this._httpClient.put<void>(url,[]);
  }

  resolve(): Observable<CompoundsResponse> | Promise<CompoundsResponse> | CompoundsResponse {
    return this.fetch();
  }

}
