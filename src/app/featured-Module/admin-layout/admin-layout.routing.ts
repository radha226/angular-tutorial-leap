import { Routes } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserModule } from '../user/user.module';
import { AngularPracticeModule } from '../angular-practice/angular-practice/angular-practice.module';
import { RxjsComponentsModule } from '../rxjs-components/rxjs-components.module';
import { ShoppingListModule } from '../shopping/shopping-list.module';
import { LogoutComponent } from '../logout/logout.component';
export const AdminLayoutRoutes: Routes = [
    {path:'',
     children:[
        { path: '', redirectTo: 'dashboard',
          pathMatch: 'full' },
        { path: 'dashboard', loadChildren: () => DashboardModule },
        { path: 'list-user', loadChildren: () => UserModule },
        { path:'angular-practice',loadChildren:()=>AngularPracticeModule },
        {path:'rxjs-component',  loadChildren:()=>RxjsComponentsModule},
        {path:'shopping',  loadChildren:()=>ShoppingListModule},
        {path:'logout',component:LogoutComponent}
     ]
    }
];
