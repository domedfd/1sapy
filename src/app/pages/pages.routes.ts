import { PromesasComponent } from './promesas/promesas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBras' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Comfiguracion' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Dashboard' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
     }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );