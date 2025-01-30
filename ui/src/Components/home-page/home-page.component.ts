import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { FooterComponent } from "../shared-components/footer/footer.component";
import { HeaderComponent } from '../shared-components/header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
open(_t46: TemplateRef<any>) {
throw new Error('Method not implemented.');
}

}
