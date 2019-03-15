import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
  import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HaveroomComponent } from './haveroom/haveroom.component';
import { LookingroomComponent } from './lookingroom/lookingroom.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    DashboardComponent,
    HaveroomComponent,
    LookingroomComponent,
    AdminComponent,
    OwnerDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
