import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserchartComponent } from './userchart/userchart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    UserloginComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UserComponent,
    AdduserComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UserchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
