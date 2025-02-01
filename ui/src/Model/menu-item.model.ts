export interface MenuItem {
  id: number;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  description: string;
  image1: string;
  image2: string;

  category: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
}

export interface MenuItemCarousel{
  name: string;
  image: string;
  category:string;
}