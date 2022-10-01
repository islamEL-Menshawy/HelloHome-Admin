import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Breadcrumb} from "../../../../layout/components/content-header/breadcrumb/breadcrumb.component";
import {ContentService} from "../content.service";
import {ColumnMode} from '@swimlane/ngx-datatable';
import Swal from "sweetalert2";


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
    this.getData();
  }

  getData(){
    this._contentService.getSubData('contact').subscribe(response => {
      this.data = response.data;
    });
  }

  openMassage(massage):void{
    Swal.fire({
      title: 'Customer Message',
      text: massage,
      confirmButtonColor: '#7367F0',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }

    })
  }


  fireDeleteModel(id, type) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure delete`,
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
        this._contentService.delete(id, type).subscribe(() => {
          this.getData();
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `deleted.`,
            customClass: {
              confirmButton: 'btn btn-success'
            }
          }).then();
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
