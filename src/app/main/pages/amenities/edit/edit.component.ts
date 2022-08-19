import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AmenityResponse, AmenityRequest} from "../Types";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {AmenitiesService} from "../amenities.service";
import {takeUntil} from "rxjs/operators";
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

  // Public
  public rows;
  public currentRow: AmenityResponse;
  public id;
  public dataToUpdate: AmenityRequest;
  public breadcrumbDefault: Breadcrumb;


  // Private
  private _unsubscribeAll: Subject<any>;
  private readonly MODEL_NAME = 'Amenity';
  amenityImage;
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  newAmenityForm: FormGroup;

  constructor(private _activatedRoute: ActivatedRoute,
              private _modelService: AmenitiesService,
              private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService) {
    this._unsubscribeAll = new Subject();
    this.newAmenityForm = this.fb.group({amenityImage: [null]})

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

  renderData() {
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
          name: `${this.MODEL_NAME}`,
          isLink: true,
          link: '/amenities'
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

  updateImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.currentRow.data.image.image_path = event.target.result;
      };
      const file = (event.target as HTMLInputElement).files[0];
      this.newAmenityForm.patchValue({
        amenityImage: file
      });
      this.newAmenityForm.get('amenityImage').updateValueAndValidity();
      this.amenityImage = this.newAmenityForm.get('amenityImage').value;
      this._modelService.updateImage(this.id, this.amenityImage).subscribe(()=>{
        this.toastrSuccess(`${this.MODEL_NAME} updated`, `${this.MODEL_NAME} image updated success`);
      });

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
