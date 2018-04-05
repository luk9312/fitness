import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module'; 
import { LoginComponent } from './containers/login/login.component';

export const ROUTE: Routes = [
   {path:'', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}