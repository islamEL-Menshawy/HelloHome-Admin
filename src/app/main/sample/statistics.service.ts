import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {



    private readonly API_URL = environment.apiUrl + '/statistics';

    constructor(private _httpClient: HttpClient) {
    }

    public getEntityStatistics(): Observable<any> {
        return this._httpClient.get<any>(`${this.API_URL}/entity`);
    }
    public getCountryStatistics(): Observable<any> {
        return this._httpClient.get<any>(`${this.API_URL}/country`);
    }
    public getMonthlyStatistics(): Observable<any> {
        return this._httpClient.get<any>(`${this.API_URL}/visitors-per-months?year=2023`);
    }
}

