import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user={
    email:"",
    username:"",
    password:"",
   
  }

  constructor(private userService:LoginService , private route:Router) { }

  adduser(){
    this.userService.adduser(this.user).subscribe((res)=>{

      if(res.status){
        alert("Sucessfully Saved")
        window.location.reload();

       }else{
        alert("Email already taken")
        window.location.reload();

       };
    });
  }

  ngOnInit(): void {
  }

}
