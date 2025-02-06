import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
    
  ],
  exports: [HeaderComponent,FooterComponent],
})
export class SharedComponentsModule { }
