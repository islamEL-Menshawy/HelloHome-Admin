import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from "@angular/router";
import {SliderService} from "./slider.service";
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
import {AuthGuard} from "../../../auth/helpers";

// Routing
const routes : Routes = [
  {
    path: 'slider',
    canActivate : [AuthGuard],
    children: [
      {
        path:'',
        component: ListComponent,
        resolve: {
          dummy: SliderService
        },
        data: { animation: 'list' }
      },
      {
        path: 'create',
        component: AddComponent,
        data: { animation: 'list' }
      },
      {
        path: ':id/edit',
        component: EditComponent,
        data: { animation: 'list' }
      }
    ]}
];

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent
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
export class SliderModule { }
