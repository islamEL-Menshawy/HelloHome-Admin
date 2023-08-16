import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ContentService} from "../content.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  public data:any = {};
  public seoData:any = {};
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public seoCollapsed = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  public isCollapsed6 = true;
  public isCollapsed7 = true;
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
        name: 'About',
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
    this._contentService.getData('About us').subscribe(response => {
      if (response.success){
        this.data = response.data;
        this.seoData = this.data['seo'];
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
      this.seoData['page_id'] = this.data['page_id'];
      form.value['seo'] = this.seoData;
      this._contentService.update(form.value).subscribe(response =>{
        this.toastr.success("About Page Updated successfully", "Page updated", {
          toastClass: 'toast ngx-toastr',
          closeButton: false
        });
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
