import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { AdminLayoutComponent } from './featured-module/admin-layout/admin-layout.component';
import { LoginComponent } from './featured-module/login/login.component';
import { AuthGuard } from './featured-module/auth/auth.guard';
import {SharedModule} from './shared/shared.module';
import { PageNotFoundComponent } from './featured-module/page-not-found/page-not-found.component';
import { AdminLayoutModule } from './featured-Module/admin-layout/admin-layout.module';
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
      { path: '', canLoad:[AuthGuard],  loadChildren:()=>AdminLayoutModule}
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
    RouterModule.forRoot(routes,
    routerOptions,

      // it helps to preload all module when your default page is loaded
     // {preloadingStrategy: PreloadAllModules}
     )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
