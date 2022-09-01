import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AmenitiesResponse} from "../../amenities/Types";
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {Subject} from "rxjs";
import {ColumnMode} from '@swimlane/ngx-datatable';
import {SlidersResponse} from "../types";
import {CoreConfigService} from "@core/services/config.service";
import {ToastrService} from "ngx-toastr";
import {SliderService} from "../slider.service";
import {takeUntil} from "rxjs/operators";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  public itemsResponse: SlidersResponse;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public searchValue = '';
  public typesToUpdate: AmenitiesResponse = null;
  public breadcrumbDefault: Breadcrumb;

  // Private
  private tempData: SlidersResponse = null;
  private _unsubscribeAll: Subject<void>;
  private readonly MODEL_NAME = "Slider";

  constructor(
      private _modalService: SliderService,
      private _coreConfigService: CoreConfigService,
      private _toastr: ToastrService,
  ) {
    this._unsubscribeAll = new Subject();
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
                this.tempData = response;
              });
        }, 450);
      } else {
        this._modalService.onChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.itemsResponse = response;
        });
      }
    });
  }

  fireDeleteModel(id:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure delete this slide`,
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

}
