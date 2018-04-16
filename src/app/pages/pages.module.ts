import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';
import { LOGIN_ROUTES } from '../login/login.routes';
import { IncremetadorComponent } from '../components/incremetador/incremetador.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncremetadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        LOGIN_ROUTES,
        ChartsModule
    ]
})

export class PagesModule { }