export interface MenuItems {
  id: number;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  description: string;
  image: string;
  category: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
}

export interface MenuItemCarousel {
  name: string;
  image: string;
  category: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  dietaryTags: string[];
  image: string;
  quantity:number;
}