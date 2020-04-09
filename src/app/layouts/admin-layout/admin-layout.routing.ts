import { Routes } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserModule } from '../user/user.module';
export const AdminLayoutRoutes: Routes = [
    {path:'',
     children:[
        { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
        { path: 'dashboard', loadChildren: () => DashboardModule },
        { path: 'list-user', loadChildren: () => UserModule },
     ]
    }
];
