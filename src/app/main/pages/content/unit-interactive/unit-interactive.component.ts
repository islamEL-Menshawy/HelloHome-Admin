import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ContentService} from "../content.service";
import {ColumnMode} from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-unit-interactive',
  templateUrl: './unit-interactive.component.html',
  styleUrls: ['./unit-interactive.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class UnitInteractiveComponent implements OnInit {

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
        name: 'Register Interest',
        isLink: false
      }
    ]
  };
  constructor(private _contentService: ContentService)
  { }

  ngOnInit(): void {
    this._contentService.getSubData('unit').subscribe(response => {
      this.data = response.data;
    });
  }

}
