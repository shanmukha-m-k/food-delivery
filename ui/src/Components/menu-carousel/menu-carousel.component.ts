import {  Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuItem } from '../../Model/menu-item.model';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-menu-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-carousel.component.html',
  styleUrl: './menu-carousel.component.scss'
})
export class MenuCarouselComponent  implements  OnInit, OnDestroy {
  categories: string[] = ["All", "Appetizers", "Main Courses", "Desserts", "Drinks"];
  selectedCategory: string = "All";
  currentIndex: number = 0;
  translateX: number = 0;
  touchStartX: number = 0;
  touchDeltaX: number = 0;
  slideWidth: number = 300;
  isTransitioning: boolean = false;
  autoPlayInterval:any;
  
  private destroy$ = new Subject<void>();

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      image2: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Main Courses",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false
    },
    {
      id: 1,
      name: "Premium Wireless ",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      image2: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Main Courses",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false
    },
    {
      id: 1,
      name: "Premium  Headphones",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      image2: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Main Courses",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false
    },
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      image2: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Main Courses",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false
    },
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      image2: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Main Courses",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false
    },
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      image2: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Main Courses",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false
    },
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      discount: 15,
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      image2: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Main Courses",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false
    },
    // {
    //   id: 2,
    //   name: "Premium Wireless Headphones",
    //   price: 299.99,
    //   discount: 15,
    //   rating: 4.5,
    //   description: "High-quality wireless headphones with noise cancellation",
    //   image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    //   category: "Main Courses",
    //   isVegetarian: true,
    //   isVegan: false,
    //   isGlutenFree: false
    // },
    // {
    //   id: 3,
    //   name: "4K Ultra HD Camera",
    //   price: 599.99,
    //   rating: 4.7,
    //   description: "Professional-grade camera with advanced features",
    //   image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    //   category: "Drinks",
    //   isVegetarian: true,
    //   isVegan: false,
    //   isGlutenFree: false
    // },
    // {
    //   id: 4,
    //   name: "4K Ultra HD Camera",
    //   price: 599.99,
    //   rating: 4.7,
    //   description: "Professional-grade camera with advanced features",
    //   image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    //   category: "Drinks",
    //   isVegetarian: true,
    //   isVegan: false,
    //   isGlutenFree: false
    // },
    // {
    //   id: 5,
    //   name: "4K Ultra HD Camera",
    //   price: 599.99,
    //   rating: 4.7,
    //   description: "Professional-grade camera with advanced features",
    //   image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    //   category: "Drinks",
    //   isVegetarian: true,
    //   isVegan: false,
    //   isGlutenFree: false
    // },
    // {
    //   id: 6,
    //   name: "4K Ultra HD Camera",
    //   price: 599.99,
    //   rating: 4.7,
    //   description: "Professional-grade camera with advanced features",
    //   image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    //   category: "Appetizers",
    //   isVegetarian: true,
    //   isVegan: false,
    //   isGlutenFree: false
    // },
  ];

  get filteredMenuItems(): MenuItem[] {
    return this.selectedCategory === "All"
      ? this.menuItems
      : this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  get isLastSlide(): boolean {
    return this.currentIndex >= this.filteredMenuItems.length-this.menuItems.length+1;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.currentIndex = 0;
    this.updateTranslateX();
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTranslateX();
    }
  }

  next(): void {
    if (!this.isLastSlide) {
      this.currentIndex++;
      this.updateTranslateX();
    }
  }

  updateTranslateX(): void {
    if (window.innerWidth <= 480) {
      this.slideWidth = 220;
    } else if (window.innerWidth <= 768) {
      this.slideWidth = 270;
    } else {
      this.slideWidth = 320;
    }
    this.updateTranslate();
  }
  updateTranslate() {
    this.isTransitioning = true;
    this.translateX = -this.currentIndex * this.slideWidth;
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchDeltaX = this.touchStartX - event.touches[0].clientX;
  }

  onTouchEnd(): void {
    if (Math.abs(this.touchDeltaX) > 50) {
      if (this.touchDeltaX > 0) {
        this.next();
      } else {
        this.previous();
      }
    }
    this.touchStartX = 0;
    this.touchDeltaX = 0;
  }

  addToCart(item: MenuItem): void {
    console.log(`Added ${item.name} to cart`);
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65";
  }

}
