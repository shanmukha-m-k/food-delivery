import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddToCartService } from '../../Services/add-to-cart.service';


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartData: CartItem[] = [];
  subtotal: number = 0;
  tax: number = 0;
  deliveryFee: number = 5.99;
  total: number = 0;
  discountCode: string = "";
  showConfirmation: boolean = false;
  estimatedDeliveryTime: string = "30-45 minutes";

  tree:any;

  constructor(private _addToCartService: AddToCartService,private _router:Router) { }

  ngOnInit(): void {
    this._addToCartService.sharedParam.subscribe(data => {
      this.cartData=data;
    });
    console.log("cart",this.cartData);
    this.cartItems=this.cartData;
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.tax = this.subtotal * 0.08;
    this.total = this.subtotal + this.tax + this.deliveryFee;
  }

  incrementQuantity(item: CartItem): void {
    item.quantity++;
    this.calculateTotals();
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotals();
    }
  }

  updateQuantity(event: Event, item: CartItem): void {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);
    if (value > 0) {
      item.quantity = value;
    } else {
      item.quantity = 1;
      input.value = "1";
    }
    this.calculateTotals();
  }

  removeItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotals();
    }
  }

  applyDiscount(): void {
    if (this.discountCode.toLowerCase() === "save10") {
      this.total *= 0.9;
      alert("Discount applied successfully!");
    } else {
      alert("Invalid discount code!");
    }
  }

  checkout(): void {
    if (this.cartItems.length > 0) {
      this.showConfirmation = true;
    }
  }

  closeConfirmation(): void {
    this.showConfirmation = false;

    this.calculateTotals();
    this._router.navigate(['/']);
  }

  goToMenu(): void {
    this._router.navigate(["/menu"]);
  }
 
}
