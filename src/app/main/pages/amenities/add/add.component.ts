import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {AmenitiesService} from "../amenities.service";
import {AmenityRequest} from "../Types";
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  public typeName: string;
  public breadcrumbDefault: Breadcrumb;
  private readonly MODEL_NAME = 'Amenity';
  public amenityTitle = "";
  public image_url = "";
  public amenityRequest: AmenityRequest ;
  public displayImage:boolean = false;
    amenityImage;
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  newAmenityForm: FormGroup;



  private _unsubscribeAll = new Subject();

  constructor(
      private _modelService: AmenitiesService,
      private fb: FormBuilder,
      private toastr: ToastrService) {
    this.newAmenityForm = this.fb.group({amenityImage: [null]})
  }


  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid){
      this.amenityRequest = form.value;
      this.amenityRequest.amenity_image = this.newAmenityForm.get('amenityImage').value;
      this._modelService.add(this.amenityRequest).subscribe(()=>{
          this.toastrSuccess(`Add new ${this.MODEL_NAME}`, `New ${this.MODEL_NAME} added successfully`)
      })
    }
  }

  // Success
  toastrSuccess(title, massage) {
    this.toastr.success(massage, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: false
    });
  }

  // Success
  toastrError(title, massage) {
    this.toastr.error(massage, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: false
    });
  }

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
          name: 'Create',
          isLink: false
        }
      ]
    };
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.image_url = event.target.result;
      };


      this.displayImage = true;

      const file = (event.target as HTMLInputElement).files[0];
      this.newAmenityForm.patchValue({
        amenityImage: file
      });
      this.newAmenityForm.get('amenityImage').updateValueAndValidity();

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
