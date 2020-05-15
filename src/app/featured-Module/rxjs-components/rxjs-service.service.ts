import { Injectable } from '@angular/core';
import {Student,UserInterface} from './observable-component/Student'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {
  role:Array<UserInterface>= [
    { value: 'Super Admin', viewValue: 'Super Admin' },
    { value: 'Agent', viewValue: 'Agent' },
  ];
  data33:Object={value: 6789, viewValue: 'Super Admin' };
  data44:string='hello to all';
  
  constructor() { }
  hello():Array<object>  {
    return this.role;
  }
  getRole(): Observable<any> {
    return of(this.role);
  }
}
