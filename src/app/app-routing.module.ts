import { LookingroomComponent } from './lookingroom/lookingroom.component';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HaveroomComponent } from './haveroom/haveroom.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { PropertyListComponent } from './property-list/property-list.component';


import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/register',
    component: RegisterComponent
  },
  {
    path: 'haveroom',
    component: HaveroomComponent
  },
  {
    path: 'lookingroom',
    component: LookingroomComponent
   },
   {
     path: 'admin',
     component: AdminComponent
   },
   {
    path: 'login/owner-dashboard',
    component: OwnerDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
