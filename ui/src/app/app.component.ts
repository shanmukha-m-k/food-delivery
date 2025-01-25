import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "../home-page/home-page.component";
import { Icon } from 'ionicons/dist/types/icon/icon';
import { HeaderComponent } from "../shared-components/header/header.component";
import { FooterComponent } from "../shared-components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,HomePageComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-delivery';
}
