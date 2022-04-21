import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserListaComponent } from './user/user-lista/user-lista.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { AntDesignModule } from 'src/app/ant-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user/user-update/user-update.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListaComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AntDesignModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
