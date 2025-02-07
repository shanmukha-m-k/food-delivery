import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, RouterLink,  RouterLinkActive,  RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddToCartService } from '../../../Services/add-to-cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,FontAwesomeModule,CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  showMenu = false;
  scrolled = false;
 value:number;
 tree:any;
 constructor(private router: ActivatedRoute,private _addToCartService:AddToCartService) {
  this.tree=router.snapshot.title;
  // this.value=_addToCartService.value;
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

}
