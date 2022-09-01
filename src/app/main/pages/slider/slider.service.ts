import { Injectable } from '@angular/core';
import {AmenitiesResponse, AmenityRequest, AmenityResponse} from "../amenities/Types";
import {BehaviorSubject, Observable} from "rxjs";
import {SliderRequest, SliderResponse, SlidersResponse} from "./types";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public dataResponse: SlidersResponse;
  public onChange: BehaviorSubject<SlidersResponse>;


  private readonly API_URL = environment.apiUrl + '/slider';

  constructor(private _httpClient: HttpClient) {
    this.onChange = new BehaviorSubject(null);
    this.fetch();
  }


  public fetch(): Observable<SlidersResponse> {
    return this._httpClient.get<SlidersResponse>(`${this.API_URL}?size=1000`)
        .pipe(tap((response) => {
          this.dataResponse = response;
          this.onChange.next(this.dataResponse);
        }));
  }

  public add(data: SliderRequest): Observable<SliderResponse> {
    const formData: any = new FormData();
    for (let key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
    return this._httpClient.post<SliderResponse>(`${this.API_URL}`, formData)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public delete(id: number): Observable<void> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.delete<void>(url)
        .pipe(tap(() => this.fetch().subscribe()));
  }

  public getById(id): Observable<SliderResponse> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.get<SliderResponse>(url);
  }
  public update(id, slider: SliderRequest): Observable<SliderResponse> {
    let url = `${this.API_URL}/${id}`;
    return this._httpClient.put<SliderResponse>(url, slider);
  }

  public updateImage(id, image): Observable<void> {
    const formData: any = new FormData();
    formData.append('slide_image', image);
    return this._httpClient.post<void>(`${this.API_URL}/update-image/${id}`, formData)
        .pipe(tap(() => this.fetch().subscribe()));
  }
  //TODO : Need to update backend
  // public updateStatus(id): Observable<void> {
  //   let url = `${environment.apiUrl}/update-status/${id}/slider`;
  //   return this._httpClient.put<void>(url,[]);
  // }




  resolve(): Observable<SlidersResponse> | Promise<SlidersResponse> | SlidersResponse {
    return this.fetch();
  }

}
