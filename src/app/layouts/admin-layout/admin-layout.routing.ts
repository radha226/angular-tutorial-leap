import { Routes } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserModule } from '../user/user.module';
import { AngularPracticeModule } from '../angular-practice/angular-practice/angular-practice.module';
import { RxjsComponentsModule } from '../rxjs-components/rxjs-components.module';
export const AdminLayoutRoutes: Routes = [
    {path:'',
     children:[
        { path: '', redirectTo: 'dashboard',
        //  pathMatch: 'prefix',
          pathMatch: 'full' },
        { path: 'dashboard', loadChildren: () => DashboardModule },
        { path: 'list-user', loadChildren: () => UserModule },
        { path:'angular-practice',loadChildren:()=>AngularPracticeModule },
        {path:'rxjs-component',  loadChildren:()=>RxjsComponentsModule}
     ]
    }
];
