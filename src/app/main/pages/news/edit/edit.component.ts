import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {NewsService} from "../news.service";
import {FormBuilder} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {resolveFileWithPostfixes} from "@angular/compiler-cli/ngcc/src/utils";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EditComponent implements OnInit {

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
        name: 'Edit',
        isLink: false
      }
    ]
  };
  public object_to_save:any={};
  public id;

  constructor(
      private newsService:NewsService,
      private fb: FormBuilder,
      private toastr: ToastrService,
      private router:Router,
      private _activatedRoute:ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.renderData();
    });
  }
  renderData(){
    this.newsService.getById(this.id).subscribe(response =>{
      this.object_to_save = response.data;
    });
  }

  updateImage($event: Event) {

  }

  submit() {
    this.newsService.update(this.id, this.object_to_save).subscribe(response => {
      this.toastr.success(response.massage, "Success", {
        toastClass: 'toast ngx-toastr',
        closeButton: false
      });
      this.router.navigate(['/news']);
    });
  }
}
