import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { ThirdComponent } from './Components/third/third.component';

const routes: Routes = [
  {
    path:'',component:ThirdComponent,
    children:[
     { path:'first',component:FirstComponent},
     {path:'second',component:SecondComponent}

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
