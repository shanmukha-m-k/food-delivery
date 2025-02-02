import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuItem, MenuItemCarousel } from '../../Model/menu-item.model';
import { Subject } from 'rxjs';
import firstMenuItem from '../../assets/carousel-data/first-carousel.json';
import secondMenuItem from '../../assets/carousel-data/second-carousel.json'



@Component({
  selector: 'app-menu-carousel',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './menu-carousel.component.html',
  styleUrl: './menu-carousel.component.scss'
})
export class MenuCarouselComponent implements OnInit, OnDestroy {
  selectedCategory: string = "All";
  currentIndex: number = 0;
  translateX: number = 0;
  touchStartX: number = 0;
  touchDeltaX: number = 0;
  slideWidth: number = 300;
  isTransitioning: boolean = false;
  autoPlayInterval: any;
  item: any;
  private destroy$ = new Subject<void>();

  firstMenuItems: MenuItemCarousel[] = firstMenuItem;
  secondMenuItems: MenuItemCarousel[] = secondMenuItem;




  get firstFilteredMenuItems(): MenuItemCarousel[] {
    return this.selectedCategory === "All"
      ? this.firstMenuItems
      : this.firstMenuItems.filter(item => item.category === this.selectedCategory);
  }
  get secondFilteredMenuItems(): MenuItemCarousel[] {
    return this.selectedCategory === "All"
      ? this.secondMenuItems
      : this.secondMenuItems.filter(item => item.category === this.selectedCategory);
  }

  get isLastSlide(): boolean {
    return this.currentIndex >= this.firstFilteredMenuItems.length - this.firstMenuItems.length + 1;
  }

  ngOnInit(): void {
  }

  selectedMenuItem(item: any): any {
    console.log(item);
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

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = "../../assets/images/carousel-image/pastry.jpg";
  }

}
