import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTE: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    ]
  }
];


export const  firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAyo2VfvkKWJsKJIv7tbk84FnUxcganobU",
  authDomain: "fitness-bd62c.firebaseapp.com",
  databaseURL: "https://fitness-bd62c.firebaseio.com",
  projectId: "fitness-bd62c",
  storageBucket: "fitness-bd62c.appspot.com",
  messagingSenderId: "739262174582"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}