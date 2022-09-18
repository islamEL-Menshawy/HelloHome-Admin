import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
      private toastr: ToastrService,
      private router : Router
  ) { }
  public handelError(errorResponse: HttpErrorResponse) {
    switch (errorResponse.status) {
      case 422: {
        for (const property in errorResponse.error.errors) {
          if (errorResponse.error.errors.hasOwnProperty(property)) {
            const propertyErrors: Array<string> = errorResponse.error.errors[property];
            propertyErrors.forEach(error => {
              this.toastr.error(error, errorResponse.error.message, {
                toastClass: 'toast ngx-toastr',
                closeButton: false
              });
            });
        }
        }
        break;
      }
      case 401:{
        localStorage.clear();
        location.reload();
      }
      default: {
        // this.toastr.error("Something Wrong", "Contact Site Administrator", {
        //   toastClass: 'toast ngx-toastr',
        //   closeButton: false
        // });
        break;
      }
    }
}
}
