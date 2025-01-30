import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

    private userDataSource = new BehaviorSubject({email : '', password : ''});
    currentUserData = this.userDataSource.asObservable();
    constructor() { }
    changeData(newUserData:any) {
      this.userDataSource.next(newUserData)
    }
  }
