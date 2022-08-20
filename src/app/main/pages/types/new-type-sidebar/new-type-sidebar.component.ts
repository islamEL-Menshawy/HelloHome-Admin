import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {CoreSidebarService} from "@core/components/core-sidebar/core-sidebar.service";
import {ToastrService} from "ngx-toastr";
import {TypesService} from "../types.service";
import {TypeRequest} from "../Types";

@Component({
  selector: 'app-new-type-sidebar',
  templateUrl: './new-type-sidebar.component.html'
})
export class NewTypeSidebarComponent implements OnDestroy {

  public typeName: string;
  public typeDate: TypeRequest;

  private _unsubscribeAll = new Subject();

  constructor(private _coreSidebarService: CoreSidebarService,
              private _typeService: TypesService,
              private toastr: ToastrService) {
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }


  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      this.typeDate = form.value;
      console.log(this.typeDate);
      this._typeService.add(this.typeDate).subscribe(()=>{
        this.toastrSuccess("Add new Type", "New type added successfully")
      });
      this.toggleSidebar('new-type-sidebar');
      this.typeName = ' ';
    }
  }

  // Success
  toastrSuccess(title, massage) {
    this.toastr.success(massage, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: false
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
