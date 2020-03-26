import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes =[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: AdminLayoutComponent,
    children: [
      { path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
    ]
  },

  //{ path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'},
  {path:'**', component:PageNotFoundComponent}
  // {
  //   path: 'customers',
  //   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  // },
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
