import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardsService } from './guards/login.guard';
import { MainGuardsService } from './guards/main.guard';
import { AuthComponent } from './modules/auth/auth/auth.component';
import { MainComponent } from './modules/main/main/main.component';

const routes: Routes = [
  {
    path: "", 
    component: AuthComponent, canActivate: [LoginGuardsService],
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "main", 
    component: MainComponent, canActivate: [MainGuardsService] ,
    loadChildren:() => import('./modules/main/main.module').then(m => m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
