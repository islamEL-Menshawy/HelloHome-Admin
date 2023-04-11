import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewsService} from "../news.service";
import {UnitsResponse} from "../../unites/Types";
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ColumnMode} from '@swimlane/ngx-datatable';
import Swal from "sweetalert2";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  public news_data:any={};
  // Public
  public itemsResponse: UnitsResponse;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public breadcrumbDefault: Breadcrumb;
  constructor(
      private newsService:NewsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbDefault = {
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: `News`,
          isLink: false
        }
      ]
    };
    this.newsService.fetch().subscribe(response =>{
      this.news_data = response;
    });
  }

  fireDeleteModel(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure delete this news`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then((result) => {
      if (result.value) {
        this.newsService.delete(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `Your news has been deleted.`,
            customClass: {
              confirmButton: 'btn btn-success'
            }
          }).then(()=>{
            this.newsService.fetch().subscribe(response =>{
              this.news_data = response;
            });
          });
        })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your are Cancelled :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        }).then();
      }
    });
  }

}
