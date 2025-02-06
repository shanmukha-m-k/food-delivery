import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  data:any=null;
  private paramSource = new BehaviorSubject(this.data);
  sharedParam =this.paramSource.asObservable();


  constructor() { }

  changeParam(param:any){
    console.log("service",param)
    this.paramSource.next(param);
  }

}
