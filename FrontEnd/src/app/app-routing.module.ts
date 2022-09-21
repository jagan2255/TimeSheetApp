import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserchartComponent } from './userchart/userchart.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:"" , component:LoginComponent,
  children:[
    {path:"" , component:UserloginComponent},
    {path:"adminlogin",component:AdminloginComponent}
  ]},
  {path:"admin",component:AdminComponent,
  children:[
     {path:"",component:AdminhomeComponent},
     {path:"adduser" , component:AdduserComponent},
     {path:"userchart", component:UserchartComponent}

  ]},
  {path:"user",component:UserComponent,
  children:[
    {path:"",component:UserhomeComponent},
 ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
