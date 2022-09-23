import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ContentService} from "../content.service";
import {ColumnMode} from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  public data:any = {};
  public ColumnMode = ColumnMode;
  public selectedOption = 10;
  public searchValue = '';

  public breadcrumbDefault: Breadcrumb = {
    links: [
      {
        name: 'Home',
        isLink: true,
        link: '/'
      },
      {
        name: 'Site Data',
        isLink: false
      },
      {
        name: 'Contact Us',
        isLink: false
      }
    ]
  };
  constructor(private _contentService: ContentService)
  { }

  ngOnInit(): void {
    this._contentService.getSubData('contact').subscribe(response => {
      this.data = response.data;
    });
  }

}
