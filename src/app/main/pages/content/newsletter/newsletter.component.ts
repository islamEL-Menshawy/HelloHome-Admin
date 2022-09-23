import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ContentService} from "../content.service";
import {ColumnMode} from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsletterComponent implements OnInit {

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
        name: 'Newsletter',
        isLink: false
      }
    ]
  };
  constructor(private _contentService: ContentService)
  { }

  ngOnInit(): void {
    this._contentService.getSubData('newsletter').subscribe(response => {
        this.data = response.data;
    });
  }

}
