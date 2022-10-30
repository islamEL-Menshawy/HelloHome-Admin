import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse,
    HttpEvent,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {CallerConstant} from "./Data";
@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    constructor(
    ) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const token = localStorage.getItem('tokenKey');
        if (token)
            request = request.clone({
                headers: request.headers.set(
                    CallerConstant.HTTPHeaders.Authorization.Key,
                    token
                ),
            });
        request.headers.set(
            CallerConstant.HTTPHeaders.ContentType.Key,
            CallerConstant.HTTPHeaders.ContentType.Value
        );
        request.headers.set(
            CallerConstant.HTTPHeaders.Accept.Key,
            CallerConstant.HTTPHeaders.Accept.Value
        );


        return next.handle(request).pipe(
            // Response
            map((response: HttpEvent<any>) => {
                return response;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        );
    }
}