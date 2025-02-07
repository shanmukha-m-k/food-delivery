import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from '../../Model/menu-item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import menuGrid from '../../assets/carousel-data/menu.json';
import { FooterComponent } from "../shared-components/footer/footer.component";
import { AddToCartService } from '../../Services/add-to-cart.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../shared-components/header/header.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuGridItems: MenuItem[] = menuGrid;
  cartItems: MenuItem[]=[];
  categories: string[] = ["Appetizers", "Main Courses", "Desserts", "Beverages"];
  searchTerm: string = "";
  selectedCategory: string = "all";
  selectedItem: MenuItem | null = null; 
  filters = {
    vegetarian: false,
    vegan: false,
    glutenFree: false
  };
  subtotal: number = 0;
  

  constructor(private _addToCartService: AddToCartService,private _router:Router) { }
  passDataToService(passObjects:any) {
this._addToCartService.changeParam  
    (passObjects);
this._addToCartService.totalCartQuantitiy(passObjects);
 }
  ngOnInit(): void { 
    this._addToCartService.value;
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  incrementQuantity(item: any): void {
    item.quantity++;
    this.calculateTotals();
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotals();
    }
  }

  get displayedCategories(): string[] {
    if (this.selectedCategory === "all") {
      return this.categories;
    }
    return [this.selectedCategory];
  }

  filterMenuItems(category: string): MenuItem[] {
    return this.menuGridItems.filter(item => {
      const matchesCategory = item.category === category;
      const matchesSearch = item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesDietary = (
        (!this.filters.vegetarian || item.dietaryTags.includes("vegetarian")) &&
        (!this.filters.vegan || item.dietaryTags.includes("vegan")) &&
        (!this.filters.glutenFree || item.dietaryTags.includes("gluten-free"))
      );

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }

  openItemModal(item: MenuItem): void {
    this.selectedItem = item;
  }

  closeModal(): void {
    this.selectedItem = null;
  }

  handleImageError(event: any): void {
    event.target.src = "../../assets/images/carousel-image/pastry.jpg";
  }
 
}
