import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
// import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {
  constructor(private routes : Router){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('email') != null){
      return true;
    }else{
      this.routes.navigate(['/login']);
      return false;
    }
  }
  canLoad(route: Route): boolean{
    if(localStorage.getItem('email') != null){
      return true;
    }else{
      this.routes.navigate(['/login']);
      return false;
    }
  }
}
