import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MenuItem } from '../../Model/menu-item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../shared-components/footer/footer.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
      price: 12.99,
      category: "Appetizers",
      dietaryTags: ["vegetarian", "gluten-free"],
      imageUrl: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5"
    },
    {
      id: 1,
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
      price: 12.99,
      category: "Appetizers",
      dietaryTags: ["vegetarian", "gluten-free"],
      imageUrl: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5"
    },
    {
      id: 1,
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
      price: 12.99,
      category: "Appetizers",
      dietaryTags: ["vegetarian", "gluten-free"],
      imageUrl: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5"
    },
    {
      id: 1,
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
      price: 12.99,
      category: "Appetizers",
      dietaryTags: ["vegetarian", "gluten-free"],
      imageUrl: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon herb butter",
      price: 28.99,
      category: "Main Courses",
      dietaryTags: ["gluten-free"],
      imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: 9.99,
      category: "Desserts",
      dietaryTags: ["vegetarian"],
      imageUrl: "https://images.unsplash.com/photo-1540337706094-da10342c93d8"
    }
  ];

  categories: string[] = ["Appetizers", "Main Courses", "Desserts", "Beverages"];
  searchTerm: string = "";
  selectedCategory: string = "all";
  selectedItem: MenuItem | null = null;
  filters = {
    vegetarian: false,
    vegan: false,
    glutenFree: false
  };

  constructor() {}

  ngOnInit(): void {}

  get displayedCategories(): string[] {
    if (this.selectedCategory === "all") {
      return this.categories;
    }
    return [this.selectedCategory];
  }

  filterMenuItems(category: string): MenuItem[] {
    return this.menuItems.filter(item => {
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
    event.target.src = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65";
  }
}
