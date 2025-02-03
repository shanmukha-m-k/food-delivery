import { Component, HostListener, OnInit } from '@angular/core';
import {  RouterLink,  RouterLinkActive,  RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  showMenu = false;
  scrolled = false;
  isDarkMode = false;

  ngOnInit() {
    this.checkTheme();
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

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute(
      "data-theme",
      this.isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
  }

  private checkTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    this.isDarkMode = savedTheme === "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}
