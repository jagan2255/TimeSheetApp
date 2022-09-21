import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin={

    email:"",
    password:"",

  }

  constructor(private userService:LoginService , private route:Router) { }

 adminlogin(){
  this.userService.adminlogin(this.admin).subscribe((res)=>{

    if(res.status){
      
      this.route.navigate(['/admin'])

     }else{
      console.log(res.data)
      var error = res.data
      alert(error);
     }
  })
 }

  ngOnInit(): void {
  }

}
