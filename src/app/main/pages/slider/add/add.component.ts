import { Component, OnInit } from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {CompoundRequest} from "../../compounds/Types";
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {CompoundsService} from "../../compounds/compounds.service";
import {ToastrService} from "ngx-toastr";
import {SliderService} from "../slider.service";
import {SliderRequest} from "../types";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  //public properties
  public breadcrumbDefault: Breadcrumb;
  private readonly MODEL_NAME = 'Slider';
  public first_text: string = '';
  public second_text: string = '';
  slideImage;
  public is_image :boolean = true;

  public sliderRequest: SliderRequest ;
  public displayImage:boolean = false;

  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  newSlideForm: FormGroup;

  private _unsubscribeAll = new Subject();

  constructor(
      private _modelService: SliderService,
      private fb: FormBuilder,
      private toastr: ToastrService) {
    this.newSlideForm = this.fb.group({slideImage: [null]})
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid){
      this.sliderRequest = form.value;
      this.sliderRequest.slide_image = this.newSlideForm.get('slideImage').value;
      if (this.sliderRequest.is_image){
        this.sliderRequest.is_image = 1;
      }else{
        this.sliderRequest.is_image = 0;
      }
      this._modelService.add(this.sliderRequest).subscribe(()=>{
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

  // Error
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
          name: `${this.MODEL_NAME}s`,
          isLink: true,
          link: '/slider'
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
        this.slideImage = event.target.result;
      };
      this.displayImage = true;
      const file = (event.target as HTMLInputElement).files[0];
      console.log(file);
      this.newSlideForm.patchValue({
        slideImage: file
      });
      this.newSlideForm.get('slideImage').updateValueAndValidity();
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
