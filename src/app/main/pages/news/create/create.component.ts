import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {NewsService} from "../news.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  formGroup: FormGroup;

  public breadcrumbDefault: Breadcrumb = {
    links: [
      {
        name: 'Home',
        isLink: true,
        link: '/'
      },
      {
        name: `News`,
        isLink: true,
        link: '/news'
      },
      {
        name: 'Create',
        isLink: false
      }
    ]
  };


  public object_to_save:any={};

  constructor(
      private newsService:NewsService,
      private fb: FormBuilder,
      private toastr: ToastrService,
      private router:Router
  ) {
    this.formGroup = this.fb.group({image_url: [null]})
  }

  ngOnInit(): void {
  }

  submit(){
    this.object_to_save.image =  this.formGroup.get('image_url').value;
    this.newsService.create(this.object_to_save).subscribe(response =>{
      this.toastr.success(response.message, "Success", {
        toastClass: 'toast ngx-toastr',
        closeButton: false
      });
      this.router.navigate(['/news']);
    })
  }

  updateImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.object_to_save.image_url = event.target.result;
      };
      const file = (event.target as HTMLInputElement).files[0];
      this.formGroup.patchValue({
        image_url: file
      });
      this.formGroup.get('image_url').updateValueAndValidity();
      reader.readAsDataURL(event.target.files[0]);
    }
  }


}
