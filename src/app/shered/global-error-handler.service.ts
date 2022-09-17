import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import {ErrorHandlerService} from "./error-handler.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }
  //============================Data===========================
  handleError(error: HttpErrorResponse) {
    const service = this.injector.get(ErrorHandlerService);
    service.handelError(error);
  }
}