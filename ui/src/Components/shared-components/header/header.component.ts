import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, RouterLink,  RouterLinkActive,  RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,FontAwesomeModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  showMenu = false;
  scrolled = false;
 value:number=0;
 tree:any;
 constructor(private router: ActivatedRoute) {
  this.tree=router.snapshot.title;
  

}
  ngOnInit() {
    
      }

  @HostListener("window:scroll")
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  
  updateValue() {
    // Update the value
    this.myValue = 'new value';

    // Store the updated value in local storage
    localStorage.setItem('myValue', this.myValue);
  }

  resetValue() {
    // Reset the value
    this.myValue = 'initial value';

    // Remove the value from local storage
    localStorage.removeItem('myValue');
  }

}
