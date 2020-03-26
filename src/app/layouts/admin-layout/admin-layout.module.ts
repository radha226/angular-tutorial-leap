import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { GalleryComponent } from '../../gallery/gallery.component';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from '../../logout/logout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListUserComponent } from '../../user/list-user/list-user.component';
import { AddUserComponent } from '../../user/add-user/add-user.component';
import { EditUserComponent } from 'src/app/user/edit-user/edit-user.component';
import { ViewUserComponent } from '../../user/view-user/view-user.component';
import { DeleteUserComponent } from '../../user/delete-user/delete-user.component';
//import { DashboardComponent } from '../dashboard/dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
   //DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GalleryComponent,
    LogoutComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
  ],
  // entryComponents: [DeleteUserComponent]
})

export class AdminLayoutModule {}
