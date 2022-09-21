import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

   users=[{
    email:"",
    username:"",
   }]



  constructor(private adminService:AdminService , private route:Router) { }

  getdetils(i:any){
    localStorage.setItem('uemail' , i.email)
    localStorage.setItem('uid' , i._id)
    this.route.navigate(["/admin/userchart"])

  }

  ngOnInit(): void {
    this.adminService.getuser().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data))

    })
  }

}
