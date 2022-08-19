import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from "@angular/router";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {CoreCommonModule} from "@core/common.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng2FlatpickrModule} from "ng2-flatpickr";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CoreDirectivesModule} from "@core/directives/directives";
import {CoreSidebarModule} from "@core/components";
import {CorePipesModule} from "@core/pipes/pipes.module";
import {ToastrModule} from "ngx-toastr";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {AmenitiesService} from "./amenities.service";
import { NewTypeSidebarComponent } from './new-type-sidebar/new-type-sidebar.component';
import {BreadcrumbModule} from "../../../layout/components/content-header/breadcrumb/breadcrumb.module";
import { EditComponent } from './edit/edit.component';

// Routing
const routes : Routes = [
  {
    path: 'types',
    children: [
        {
            path:'',
            component: ListComponent,
            resolve: {
                dummy: AmenitiesService
            },
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
    ListComponent,
    NewTypeSidebarComponent,
    EditComponent
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
export class AmenitiesModule { }
