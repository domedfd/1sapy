import { PAGES_ROUTES } from './../pages/pages.routes';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]

})

export class LoginModule { }