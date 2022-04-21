import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user/user.component';

const routes: Routes = 
[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserComponent, 
    loadChildren:() => import('../user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
