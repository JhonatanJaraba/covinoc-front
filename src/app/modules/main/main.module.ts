import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AntDesignModule } from 'src/app/ant-design.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    AntDesignModule,
    FormsModule
  ]
})
export class MainModule { }
