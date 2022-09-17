import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ContentService} from "../content.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {


  public data:any = {};
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  public isCollapsed6 = true;
  public isCollapsed7 = true;
  public isCollapsed8 = true;
  public isCollapsed9 = true;
  public isCollapsed10 = true;
  public isCollapsed11 = true;
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
        name: 'Services',
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
    this._contentService.getData('service').subscribe(response => {
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
      this.toastr.success("Service Page Updated successfully", "Page updated", {
        toastClass: 'toast ngx-toastr',
        closeButton: false
      });
    }
  }

  updateImage(event, title){
    let image : File = event.target.files[0];
    this._contentService.updateImage(title, image).subscribe(response =>{
      console.log(response.data);
      this.data[title] = response.data;
      this.toastr.success("Image updated", "Image Updated Successfully",{
        toastClass: 'toast ngx-toastr',
        closeButton: false
      });
    });
  }
}
