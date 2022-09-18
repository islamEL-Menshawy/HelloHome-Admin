import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {CoreCommonModule} from "../../../../@core/common.module";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng2FlatpickrModule} from "ng2-flatpickr";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CorePipesModule} from "../../../../@core/pipes/pipes.module";
import {CoreDirectivesModule} from "../../../../@core/directives/directives";
import {CoreSidebarModule} from "../../../../@core/components";
import {ToastrModule} from "ngx-toastr";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {BreadcrumbModule} from "../../../layout/components/content-header/breadcrumb/breadcrumb.module";
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import {AuthGuard} from "../../../auth/helpers";

// Routing
const routes : Routes = [
  {
    path: 'content',
    children: [
      {
        path:'home',
        component: HomeComponent,
        data: { animation: 'list' }
      },
      {
        path:'about',
        component: AboutComponent,
        data: { animation: 'list' }
      },
      {
        path:'service',
        component: ServicesComponent,
        data: { animation: 'list' }
      },
      {
        path:'contact',
        component: ContactComponent,
        data: { animation: 'list' }
      }
    ]
  ,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    CoreCommonModule,
    FormsModule,
    NgbModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    CoreSidebarModule,
    ToastrModule,
    SweetAlert2Module.forRoot(),
    BreadcrumbModule
  ]
})
export class ContentModule { }
