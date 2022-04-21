import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListaComponent } from './user/user-lista/user-lista.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

const routes: Routes = 
[
  {
    path:'',
    component:UserListaComponent
  },
  {
    path:'user-create',
    component:UserCreateComponent
  },
  {
    path:'user-update/:id',
    component:UserUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
