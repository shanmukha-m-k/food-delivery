import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, EMPTY } from 'rxjs';
import { MenuItem } from '../Model/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

value:any[]=[];
totalItem:any[]=[];
cartItem:any[]=[]
  data:any[]=[];
  private paramSource = new BehaviorSubject(this.data);
  sharedParam =this.paramSource.asObservable();


  constructor() { }



  changeParam(param:MenuItem[]){
    this.cartItem.push(param);
    this.paramSource.next(this.cartItem);
    // this.cartItem.map((data)=>{
    //   this.value.push(data?.quantity)
    //   // this.value=data?.quantity;
    //   console.log("cart quantity",data?.quantity)
    // })
    localStorage.setItem('dataSource',JSON.stringify( this.cartItem));
    // let data = JSON.parse(localStorage.getItem("dataSource")|| '{}');
    // console.log("srihari",data);  
    // console.log("total",this.value);
  }

  temp:any[]=[];
  sumInArray:number;

   totalCartQuantitiy(param:any[]){
    this.value.push(param);
    this.paramSource.next(this.value);
     this.value.map((data)=>{
      // this.value=data?.quantity;
      this.totalItem+=data?.quantity;
      console.log("cart quantity",data?.quantity)
      // this.sumInArray = data?.quantity.reduce( (a:any, b:any) => a + b);


    })
    localStorage.setItem('dataSource',JSON.stringify( this.value));
    // let data = JSON.parse(localStorage.getItem("dataSource")|| '{}');
    // console.log("srihari",data);  

    console.log("car  t quantity",this.totalItem.map(a=>a))

  }


  emptyCart() {
    this.cartItem.length=0;
    this.paramSource.next(this.cartItem);
    localStorage.removeItem('dataSource');
 }

}
