import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './layouts/components/components.module';
import { AppComponent } from './app.component';
 import { ToastrModule } from 'ngx-toastr';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './layouts/login/login.component';
import { LoadingScreenComponent} from './loading-screen/loading-screen.component';
import { DeleteUserComponent } from './layouts/user/delete-user/delete-user.component';
import { AuthGuard } from './layouts/auth/auth.guard';
import {SharedModule} from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
   
  ],
  
 
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    LoadingScreenComponent,
    DeleteUserComponent,
    PageNotFoundComponent
  ],
  entryComponents: [DeleteUserComponent],
  providers: [CookieService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
