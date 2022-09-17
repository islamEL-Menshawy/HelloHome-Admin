import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
      private toastr: ToastrService,
      private router : Router
  ) { }
  public handelError(error: HttpErrorResponse) {
    switch (error.status) {
      case 422: {
        console.log(error)
          this.toastr.error('check form validation','', {
            toastClass: 'toast ngx-toastr',
            closeButton: false
        });

        break;
      }

      case 401:{
        localStorage.clear();
        location.reload();
      }
      case 404 :{}
      case 400:{}
      default: {
        console.log(error.status)
        break;
      }
    }
}
}
