import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {AmenitiesResponse} from "../../amenities/Types";
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {AmenitiesService} from "../../amenities/amenities.service";
import {ToastrService} from "ngx-toastr";
import {UnitesService} from "../unites.service";
import {LocationsResponse} from "../../locations/Types";
import {TypesResponse} from "../../types/Types";
import {CompoundsResponse} from "../../compounds/Types";
import {LocationsService} from "../../locations/locations.service";
import {TypesService} from "../../types/types.service";
import {CompoundsService} from "../../compounds/compounds.service";
import {UnitRequest} from "../Types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  public is_active: boolean = true;
  public typeName: string;
  private readonly MODEL_NAME = 'Unit';
  public breadcrumbDefault: Breadcrumb = {
    links: [
      {
        name: 'Home',
        isLink: true,
        link: '/'
      },
      {
        name: `${this.MODEL_NAME}s`,
        isLink: true,
        link: '/units'
      },
      {
        name: 'Create',
        isLink: false
      }
    ]
  };
  public amenityList: AmenitiesResponse;
  public locationList: LocationsResponse;
  public typeList: TypesResponse;
  public compoundList: CompoundsResponse;
  public dataToSave: UnitRequest;

  public area: number;
  public bathroom_number: number;
  public bed_number: number;
  public price: string;
  public is_youtube: boolean = true;
  public video_path: any;
  public video;
  public location: string;
  public compound_id: number;
  public type_id: number;
  public location_id: number;
  public aminites: number[]=[];
  public images: any[]=[];
  public image_url: any[]=[];

  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  newAmenityForm: FormGroup;

  private _unsubscribeAll = new Subject();

  constructor(
      private _modelService: UnitesService,
      private amenityService: AmenitiesService,
      private locationService: LocationsService,
      private typeService: TypesService,
      private compoundService: CompoundsService,
      private fb: FormBuilder,
      private router: Router,
      private toastr: ToastrService) {
    this.newAmenityForm = this.fb.group({amenityImage: [null]});

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


  submit(form) {
    if (form.valid){
      // console.log(form.value);
      this.dataToSave = form.value;
      this.dataToSave.aminites = this.aminites;
      this.dataToSave.images = this.images;
      if (this.dataToSave.is_youtube){
        this.dataToSave.is_youtube = 1;
      }else{
        this.dataToSave.is_youtube = 0;
        this.dataToSave.video_path = this.video;
      }
      this.is_active = false;
      this._modelService.add(this.dataToSave).subscribe(()=>{
        this.is_active = true;
        this.router.navigate(['/units']);
        this.toastr.success(`New ${this.MODEL_NAME} added successfully`, `Add new ${this.MODEL_NAME}`, {
          toastClass: 'toast ngx-toastr',
          closeButton: false
        });

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

  ngOnInit(): void {



  }

  uploadImage(event: any) {
    let x = 0;
    while (event.target.files && event.target.files[x]){
      let reader = new FileReader();
      reader.onload = (event: any) => {
          this.image_url.push(event.target.result) ;
      };

      this.images.push(event.target.files[x]);
      reader.readAsDataURL(event.target.files[x]);
      x++;
    }
  }
  removeImage(image){
    let index = this.image_url.indexOf(image);
    this.image_url = this.removeItemOnce(this.image_url, image);
    this.images = this.removeItemOnce(this.images, this.images[index]);

    console.log(this.image_url);
    console.log(this.images);
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

  setVideo(event) {
    const file = event.target.files[0];
    if (file.size < 10959073){
      this.video = file;
    }else {
      this.toastr.error('max file size 10M', 'The given data was invalid.',{
        toastClass: 'toast ngx-toastr',
        closeButton: false
      });
    }

  }
}
