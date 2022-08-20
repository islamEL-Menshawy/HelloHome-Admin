import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {TypesModule} from "./types/types.module";
import {LocationsModule} from "./locations/locations.module";
import {AmenitiesModule} from "./amenities/amenities.module";
import {CompoundsModule} from "./compounds/compounds.module";
import {UnitesModule} from "./unites/unites.module";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    AuthenticationModule,
    MiscellaneousModule,
    TypesModule,
    LocationsModule,
    AmenitiesModule,
    CompoundsModule,
    UnitesModule
  ],

  providers: []
})
export class PagesModule {}
