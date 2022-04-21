import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AntDesignModule } from '../ant-design.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SideBarComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
