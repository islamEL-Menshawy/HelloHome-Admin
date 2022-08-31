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


  public amenityList: AmenitiesResponse;
  public locationList: LocationsResponse;
  public typeList: TypesResponse;
  public compoundList: CompoundsResponse;

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
      console.log(this.amenityList)
    });
    this.typeService.fetch().subscribe( (response)=>{
      this.typeList = response;
      console.log(this.typeList)
    });
    this.compoundService.fetch().subscribe( (response)=>{
      this.compoundList = response;
      console.log(this.compoundList)
    });
    this.locationService.fetch().subscribe( (response)=>{
      this.locationList = response;
      console.log(this.locationList)
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
      console.log(form.value)
      console.log(this.dataToUpdate);
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
      // console.log(this.id);
      for (const item of response.data.amenities) {
        this.aminites.push(item.id);
      }
      console.log(this.aminites);
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
}
