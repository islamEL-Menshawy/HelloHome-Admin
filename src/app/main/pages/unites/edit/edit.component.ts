import { IdsRequest } from './../Types';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {Subject} from "rxjs";
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UnitRequest, UnitResponse} from "../Types";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UnitesService} from "../unites.service";
import {takeUntil} from "rxjs/operators";
import {AmenitiesResponse} from "../../amenities/Types";
import Swal from "sweetalert2";
import {LocationsResponse} from "../../locations/Types";
import {TypesResponse} from "../../types/Types";
import {CompoundsResponse} from "../../compounds/Types";
import {AmenitiesService} from "../../amenities/amenities.service";
import {LocationsService} from "../../locations/locations.service";
import {TypesService} from "../../types/types.service";
import {CompoundsService} from "../../compounds/compounds.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

  // Public
  public rows;
  public currentRow: UnitResponse;
  public id;
  public dataToUpdate: UnitRequest;
  public breadcrumbDefault: Breadcrumb;

  // public type;
  // public com;
  public aminites: number[]=[];
  public image_url: any[]=[];
  public images: any[]= [];



  public amenityList: AmenitiesResponse;
  public locationList: LocationsResponse;
  public typeList: TypesResponse;
  public compoundList: CompoundsResponse;
  public imageRemoved : IdsRequest = {
    "image_id" : 0,
    "unit_id":0
  };

  // Private
  private _unsubscribeAll: Subject<any>;
  private readonly MODEL_NAME = 'Unit';
  amenityImage;
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  newUnitForm: FormGroup;

  constructor(private _activatedRoute: ActivatedRoute,
              private _modelService: UnitesService,
              private amenityService: AmenitiesService,
              private locationService: LocationsService,
              private typeService: TypesService,
              private compoundService: CompoundsService,
              private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService) {
    this._unsubscribeAll = new Subject();
    // this.newUnitForm = this.fb.group({amenityImage: [null]})

    this.amenityService.fetch().subscribe( (response)=>{
      this.amenityList = response;
    });
    this.typeService.fetch().subscribe( (response)=>{
      this.typeList = response;
    });
    this.compoundService.fetch().subscribe( (response)=>{
      this.compoundList = response;
    });
    this.locationService.fetch().subscribe( (response)=>{
      this.locationList = response;
    });

  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      this.dataToUpdate = form.value;
      this.dataToUpdate.aminites = this.aminites;
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
      for (const item of response.data.amenities) {
        this.aminites.push(item.id);
      }
      for (const item of response.data.images) {
        this.image_url.push(item);
      }
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
          link: '/units'
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
  ngOnChanges():void{

  }

  // updateImage(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();
  //
  //     reader.onload = (event: any) => {
  //       this.currentRow.data.image.image_path = event.target.result;
  //     };
  //     const file = (event.target as HTMLInputElement).files[0];
  //     this.newAmenityForm.patchValue({
  //       amenityImage: file
  //     });
  //     this.newAmenityForm.get('amenityImage').updateValueAndValidity();
  //     this.amenityImage = this.newAmenityForm.get('amenityImage').value;
  //     this._modelService.updateImage(this.id, this.amenityImage).subscribe(()=>{
  //       this.toastrSuccess(`${this.MODEL_NAME} updated`, `${this.MODEL_NAME} image updated success`);
  //     });
  //
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  amineIsExist(id:number){
    return this.aminites.includes(id);
  }

  addOrRemove(id) {
    if (this.aminites.includes(id)){
      this.aminites = this.removeItemOnce(this.aminites, id);
    }else {
      this.aminites.push(id);
    }

  }

  removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  uploadImage(event){
      let x = 0;
      while (event.target.files && event.target.files[x]) {
        this.images.push(event.target.files[x]);
        x++;
      }
    console.log(this.images);
      this._modelService.updateImage(this.id, this.images).subscribe((response)=>{
        this.toastrSuccess("Images Updated", "Images Updated success");
        // for (const item of response.data.images) {
        //   this.image_url.push(item);
        // }
        this.image_url = response.data.images;
    });
  }

  removeImage(image){
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure delete this Image`,
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
        this.imageRemoved.image_id = image.id;
        this.imageRemoved.unit_id = this.id;        
        this._modelService.deleteImageFromUnit(this.imageRemoved).subscribe(()=>{
          this.toastrSuccess("Image removed", "Image removed success")
        });
        this.removeItemOnce(this.image_url, image);
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
