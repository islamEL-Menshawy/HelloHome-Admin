import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {IdsRequest, UnitRequest, UnitResponse, UnitsResponse} from "./Types";
import {AmenityRequest, AmenityResponse} from "../amenities/Types";

@Injectable({
  providedIn: 'root'
})
export class UnitesService {

  public dataResponse: UnitsResponse;
  public onChange: BehaviorSubject<UnitsResponse>;

  private readonly API_URL = environment.apiUrl + '/unit';

  constructor(private _httpClient: HttpClient) {
    this.onChange = new BehaviorSubject(null);
    this.fetch();
  }

  public fetch(): Observable<UnitsResponse> {
    return this._httpClient.get<UnitsResponse>(`${this.API_URL}?size=1000`)
        .pipe(tap((response) => {
          this.dataResponse = response;
          this.onChange.next(this.dataResponse);
        }));
  }
    public add(data: UnitRequest): Observable<UnitResponse> {
        const formData: any = new FormData();
        formData.append("bed_number",data.bed_number);
        formData.append("bathroom_number",data.bathroom_number);
        formData.append("area",data.area);
        formData.append("price",data.price);
        formData.append("is_youtube",data.is_youtube);
        formData.append("video_path",data.video_path);
        formData.append("location",data.location);
        formData.append("compound_id",data.compound_id);
        formData.append("type_id",data.type_id);
        formData.append("location_id",data.location_id);


        for (let key of data.aminites) {
            formData.append("aminites[]", key);
        }
        for (let key of data.images) {
            formData.append("images[]", key);
        }

        return this._httpClient.post<UnitResponse>(`${this.API_URL}`, formData)
            .pipe(tap(() => this.fetch().subscribe()));
    }
    public getById(id): Observable<UnitResponse> {
        let url = `${this.API_URL}/${id}`;
        return this._httpClient.get<UnitResponse>(url);
    }

    public update(id, unit: UnitRequest): Observable<UnitResponse> {
        let url = `${this.API_URL}/${id}`;
        return this._httpClient.put<UnitResponse>(url, unit);
    }

    public updateImage(id, image): Observable<UnitResponse> {
        const formData: any = new FormData();
        for (let key of image) {
            formData.append("images[]", key);
        }
        return this._httpClient.post<UnitResponse>(`${this.API_URL}/update-image/${id}`, formData)
            .pipe(tap(() => this.fetch().subscribe()));
    }
    public deleteImageFromUnit(ids:IdsRequest): Observable<void> {
        let url = `${this.API_URL}/delete-image`;
        return this._httpClient.put<void>(url, ids);
    }

    public delete(id: number): Observable<void> {
        let url = `${this.API_URL}/${id}`;
        return this._httpClient.delete<void>(url)
            .pipe(tap(() => this.fetch().subscribe()));
    }

    resolve(): Observable<UnitsResponse> | Promise<UnitsResponse> | UnitsResponse {
        return this.fetch();
    }

}
