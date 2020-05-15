import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { CookieService } from 'ngx-cookie-service';

import {SharedModule} from '../../shared/shared.module';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { IconsComponent } from '../icons/icons.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { LogoutComponent } from '../logout/logout.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GalleryComponent,
    LogoutComponent,
    
  ],
  exports: [
  ]
  // entryComponents: [DeleteUserComponent]
})

export class AdminLayoutModule {}
