import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {Subject} from "rxjs";
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CompoundRequest, CompoundResponse} from "../Types";
import {CompoundsService} from "../compounds.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {
// Public
  public rows;
  public currentRow: CompoundResponse;
  public seoData:any = {};
  public id;
  public dataToUpdate: CompoundRequest;
  public breadcrumbDefault: Breadcrumb;


  // Private
  private _unsubscribeAll: Subject<any>;
  private readonly MODEL_NAME = 'Compound';
  compoundImage;
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  newCompoundForm: FormGroup;

  constructor(private _activatedRoute: ActivatedRoute,
              private _modelService: CompoundsService,
              private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService) {
    this._unsubscribeAll = new Subject();
    this.newCompoundForm = this.fb.group({compoundImage: [null]})

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
      this.dataToUpdate['seo'] = this.seoData;
      this._modelService.update(this.id, this.dataToUpdate).subscribe(() => {
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
      this.seoData = response['data']['seo'];
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
          link: '/compounds'
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
      this.newCompoundForm.patchValue({
        compoundImage: file
      });
      this.newCompoundForm.get('compoundImage').updateValueAndValidity();
      this.compoundImage = this.newCompoundForm.get('compoundImage').value;
      this._modelService.updateImage(this.id, this.compoundImage).subscribe(()=>{
        this.toastrSuccess(`${this.MODEL_NAME} updated`, `${this.MODEL_NAME} image updated success`);
      });

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
