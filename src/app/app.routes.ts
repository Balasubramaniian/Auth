import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormComponent } from './Components/form/form.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'form',component:FormComponent},
    {path: 'login',component:LoginComponent}
];
