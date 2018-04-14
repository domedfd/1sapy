import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';


const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
]

export const LOGIN_ROUTES = RouterModule.forChild( loginRoutes )