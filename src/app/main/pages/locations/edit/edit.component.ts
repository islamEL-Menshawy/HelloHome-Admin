import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LocationRequest, LocationResponse} from "../Types";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {LocationsService} from "../locations.service";
import {takeUntil} from "rxjs/operators";
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

  // Public
  public rows;
  public currentRow: LocationResponse;
  public id;
  public dataToUpdate: LocationRequest;
  public breadcrumbDefault: Breadcrumb;


  // Private
  private _unsubscribeAll: Subject<any>;
  private readonly MODEL_NAME = 'Location';
  constructor(private _activatedRoute: ActivatedRoute,
              private _modelService: LocationsService,
              private router: Router,
              private toastr: ToastrService) {
    this._unsubscribeAll = new Subject();
  }
// Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      this.dataToUpdate = form.value;
      this._modelService.update(this.id, this.dataToUpdate).pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
        // Success
        this.toastrSuccess(`${this.MODEL_NAME} updated`, `${this.MODEL_NAME} ${this.dataToUpdate.title_en}  updated success`);
      });
    }
  }





  toastrSuccess(title, massage) {
    this.toastr.success(massage, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: false
    });
  }

  renderData(){
    this._modelService.getById(this.id).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.currentRow = response;
      console.log(this.id);
      console.log(this.currentRow);
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
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
          isLink: true,
          link:'/locations'
        },
        {
          name: 'Edit',
          isLink: false
        }
      ]
    };
    this._activatedRoute.paramMap.pipe(takeUntil(this._unsubscribeAll)).subscribe(params => {
      this.id = params.get('id');
      this.renderData();

    });

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
