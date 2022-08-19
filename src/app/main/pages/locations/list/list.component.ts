import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LocationsResponse} from "../Types";
import {Subject} from "rxjs";
import {LocationsService} from "../locations.service";
import {CoreSidebarService} from "@core/components/core-sidebar/core-sidebar.service";
import {ToastrService} from "ngx-toastr";
import {CoreConfigService} from "@core/services/config.service";
import {ColumnMode} from '@swimlane/ngx-datatable';
import Swal from "sweetalert2";
import {takeUntil} from "rxjs/operators";
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-list-locations',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  // Public
  public sidebarToggleRef = false;
  public itemsResponse: LocationsResponse;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public searchValue = '';
  public typesToUpdate: LocationsResponse = null;
  public breadcrumbDefault: Breadcrumb;

  // Private
  private tempData: LocationsResponse = null;
  private _unsubscribeAll: Subject<void>;
  private readonly MODEL_NAME = "Location";

  constructor(
      private _modalService: LocationsService,
      private _coreSidebarService: CoreSidebarService,
      private _coreConfigService: CoreConfigService,
      private _toastr: ToastrService,
  ) {
    this._unsubscribeAll = new Subject();
  }


  filterUpdate(event) {
    this._modalService.fetch().subscribe(()=>{
      const val = event.target.value.toLowerCase();
      // Filter Our Data & Update The Rows
      this.itemsResponse.data = this.tempData.data.filter(function (d) {
        return d.title_en.toLowerCase().indexOf(val) !== -1 || !val;
      });
    });
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  fireDeleteModel(id, typeName) {


      Swal.fire({
        title: 'Are you sure?',
        text: `Are you sure delete ${typeName} ${this.MODEL_NAME}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7367F0',
        cancelButtonColor: '#E42728',
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        }
      }).then((result) => {
        if (result.value) {
          this._modalService.delete(id).pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `Your ${this.MODEL_NAME} has been deleted.`,
              customClass: {
                confirmButton: 'btn btn-success'
              }
            }).then();
          })

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Cancelled',
            text: 'Your are Cancelled :)',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          }).then();
        }
      });
  }

  // Success
  toastrSuccess(title, massage) {
    this._toastr.success(massage, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: false
    });
  }

  ngOnInit(): void {
    this.fetchDate();
    // breadcrumb default
    this.breadcrumbDefault = {
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: `${this.MODEL_NAME}s`,
          isLink: false
        }
      ]
    };
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  fetchDate(){
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._modalService.onChange.pipe(takeUntil(this._unsubscribeAll))
              .subscribe(response => {
                this.itemsResponse = response;
              });
        }, 450);
      } else {
        this._modalService.onChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.itemsResponse = response;
          this.tempData = this.itemsResponse;
        });
      }
    });
  }
  updateStatus(id) {
    this._modalService.updateStatus(id).subscribe(()=>{
      this._toastr.success("Location status updated successfully", "Location Updated", {
        toastClass: 'toast ngx-toastr',
        closeButton: false
      });
    })
  }

}
