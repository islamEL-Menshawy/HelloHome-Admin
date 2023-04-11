import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../../auth/helpers";
import { CreateComponent } from './create/create.component';
import {BreadcrumbModule} from "../../../layout/components/content-header/breadcrumb/breadcrumb.module";
import {CoreCommonModule} from "../../../../@core/common.module";
import {CoreDirectivesModule} from "../../../../@core/directives/directives";
import {FormsModule} from "@angular/forms";
import {QuillModule} from "ngx-quill";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { EditComponent } from './edit/edit.component';




// Routing
const routes : Routes = [
  {
    path: 'news',
    canActivate : [AuthGuard],
    children: [
      {
        path:'',
        component: ListComponent,
        data: { animation: 'list' }
      },
      {
        path:'create',
        component: CreateComponent,
        data: { animation: 'list' }
      },
        {
        path:':id/edit',
        component: EditComponent,
        data: { animation: 'list' }
      }
    ]}
];
@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BreadcrumbModule,
        CoreCommonModule,
        CoreDirectivesModule,
        FormsModule,
        QuillModule.forRoot(),
        NgbDropdownModule,
        NgxDatatableModule,
    ]
})
export class NewsModule { }
