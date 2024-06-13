import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormComponent } from './Components/form/form.component';
import { LoginComponent } from './Components/login/login.component';
import { DisplayComponent } from './Components/display/display.component';
import { LazyModule } from './lazy/lazy.module';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'form',component:FormComponent},
    {path: 'login',component:LoginComponent},
    {path:'display',component:DisplayComponent},
    {path :'lazy',loadChildren: ()=> import ('./lazy/lazy.module')
        .then(m=>m.LazyModule) 
    }
];
