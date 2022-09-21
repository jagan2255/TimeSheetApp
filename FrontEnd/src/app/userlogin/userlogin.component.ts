import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user={
    email:"",
    password:"",
    role:"Student"
  }


  constructor(private userService:LoginService , private route:Router) { }

  loginuser(){
    
    this.userService.userlogin(this.user).subscribe((res)=>{

      if(res.status){
        localStorage.setItem('email' , res.email)
        this.route.navigate(['/user'])

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
