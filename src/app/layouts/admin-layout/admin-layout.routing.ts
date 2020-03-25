import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { GalleryComponent } from '../../gallery/gallery.component';
import { LoginComponent } from '../../login/login.component';
import { LogoutComponent } from '../../logout/logout.component';
import { ListUserComponent } from '../../user/list-user/list-user.component';
import { AddUserComponent } from '../../user/add-user/add-user.component';
import { EditUserComponent } from 'src/app/user/edit-user/edit-user.component';
import { ViewUserComponent } from 'src/app/user/view-user/view-user.component';
import { DeleteUserComponent } from 'src/app/user/delete-user/delete-user.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent},  
    { path: 'user-profile',   component: UserProfileComponent },
    {
        path: 'list-user',
        component: ListUserComponent
        // children: [
        //     {
        //         path: 'add-user',
        //         component: AddUserComponent,
        //         pathMatch:'full'
        //     }
        // ]
    },
    { path:'list-user/add-user',     component: AddUserComponent },
    {path:'list-user/view-user/:id', component:ViewUserComponent},
    { path:'list-user/edit-user/:id', component: EditUserComponent },
    //{path:'list-user/delete-user', component: DeleteUserComponent},
    { path: 'table-list',     component: TableListComponent },
    { path: 'logout',     component: LogoutComponent },

    // {component:AddUserComponent, pathMatch: 'full'}
    // { path: 'icons',          component: IconsComponent }
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
