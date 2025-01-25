import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  exports: [HeaderComponent,FooterComponent],
})
export class SharedComponentsModule { }
