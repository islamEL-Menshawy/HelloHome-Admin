import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentService} from "../content.service";
import {Router} from "@angular/router";
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public data:any = {};
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isDataLoaded = false;
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
        name: 'Home',
        isLink: false
      }
    ]
  };
  constructor(private _contentService: ContentService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    // breadcrumb default

    this._contentService.getData('Home').subscribe(response => {
      if (response.success){
        this.data = response.data;
        this.isDataLoaded = true;
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
      this.toastr.success("Home Page Updated successfully", "Page updated", {
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
