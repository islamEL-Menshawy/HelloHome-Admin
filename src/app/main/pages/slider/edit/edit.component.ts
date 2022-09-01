import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AmenityRequest, AmenityResponse} from "../../amenities/Types";
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {Subject} from "rxjs";
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AmenitiesService} from "../../amenities/amenities.service";
import {ToastrService} from "ngx-toastr";
import {takeUntil} from "rxjs/operators";
import {SliderRequest, SliderResponse} from "../types";
import {SliderService} from "../slider.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {
// Public
  public rows;
  public currentRow: SliderResponse;
  public id;
  public dataToUpdate: SliderRequest;
  public breadcrumbDefault: Breadcrumb;


  // Private
  private _unsubscribeAll: Subject<any>;
  private readonly MODEL_NAME = 'Slider';
  sliderImage;
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  newSliderForm: FormGroup;

  constructor(private _activatedRoute: ActivatedRoute,
              private _modelService: SliderService,
              private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService) {
    this._unsubscribeAll = new Subject();
    this.newSliderForm = this.fb.group({sliderImage: [null]})

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
        this.toastrSuccess(`${this.MODEL_NAME} updated`, `${this.MODEL_NAME}  updated success`);
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
          link: '/slider'
        },
        {
          name: 'Edit',
          isLink: false
        }
      ]
    };


  }

  ngAfterContentInit(){
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
      this.newSliderForm.patchValue({
        sliderImage: file
      });
      this.newSliderForm.get('sliderImage').updateValueAndValidity();
      this.sliderImage = this.newSliderForm.get('sliderImage').value;
      this._modelService.updateImage(this.id, this.sliderImage).subscribe(()=>{
        this.toastrSuccess(`${this.MODEL_NAME} updated`, `${this.MODEL_NAME} image updated success`);
      });

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
