import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // {
  //   path: 'dashboard',
  //   component : DashboardComponent
  // },
  {
    path: 'login',
    component: LoginComponent,
    // pathMatch: 'full',
  },
   {
      path: 'dashboard',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },

  // {
  //   path: 'login',
  //   component : LoginComponent
  //   // redirectTo: 'LoginComponent',
  // },
//   {
//     path: 'dashboard',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//  },
  // {
  //   path: 'dashboard',
  //   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  // },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //   }]
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ enableTracing: false })
  //   RouterModule.forRoot(routes,{
  //     useHash: true
  //  })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
