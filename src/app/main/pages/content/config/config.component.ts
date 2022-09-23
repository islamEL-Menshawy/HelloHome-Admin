import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ContentService} from "../content.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigComponent implements OnInit {

  public data:any = {};
  public breadcrumbDefault: Breadcrumb = {
    links: [
      {
        name: 'Home',
        isLink: true,
        link: '/'
      },
      {
        name: 'Edit Content',
        isLink: false
      },
      {
        name: 'Config',
        isLink: false
      }
    ]
  };
  constructor(private _contentService: ContentService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    // breadcrumb default
    this._contentService.getData('config').subscribe(response => {
      if (response.success){
        this.data = response.data;
      }else {
        this.router.navigate(['/miscellaneous/error']);
      }
    });
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      this._contentService.update(form.value).subscribe();
      this.toastr.success("Config Updated successfully", "Page updated", {
        toastClass: 'toast ngx-toastr',
        closeButton: false
      });
    }
  }

}
