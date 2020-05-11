import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AdminLayoutComponent } from './featuredModule/admin-layout/admin-layout.component';
import { LoginComponent } from './featuredModule/login/login.component';
import { AuthGuard } from './featuredModule/auth/auth.guard';
import {SharedModule} from './shared/shared.module';
import { PageNotFoundComponent } from './featuredModule/page-not-found/page-not-found.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // scrollOffset: [0, 64],
   onSameUrlNavigation: 'reload',
};

const routes: Routes =[
  { path: 'login', component: LoginComponent, canLoad:[AuthGuard]},
  { path: '', component: AdminLayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: '', canLoad:[AuthGuard], loadChildren: './featuredModule/admin-layout/admin-layout.module#AdminLayoutModule'}
    ]
  },
  {path:'**', component:PageNotFoundComponent}

];



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
   // RouterModule.forRoot(routes,{ enableTracing: false })
    RouterModule.forRoot(routes,routerOptions)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
