import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private cookie: CookieService) { }

  ngOnInit() {
    console.log('logout');
    this.cookie.deleteAll();
    this.router.navigate(['login']);
    localStorage.clear();
  }

}
