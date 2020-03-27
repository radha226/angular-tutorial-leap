import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './layouts/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './layouts/auth/auth.guard';

const routes: Routes =[
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: '', component: AdminLayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: '', canLoad:[AuthGuard], loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
    ]
  },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
   // RouterModule.forRoot(routes,{ enableTracing: false })
    RouterModule.forRoot(routes,{
      useHash: true
   })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
