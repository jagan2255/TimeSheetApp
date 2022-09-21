import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  date=new Date().toDateString()
  email1= localStorage.getItem("email")

  data={
    email:this.email1,
    date:this.date

  }
  isShown: boolean = false ;
   ctime:any="";

  constructor(private userService:UserService ) { }

  checktask(){
   this.userService.checkuser(this.data).subscribe((res)=>{
    console.log(res)
       if(res.status){
        alert(res.message)
        this.isShown = true
        this.ctime = new Date().getTime()
        localStorage.setItem("ctime" , this.ctime)
       }else{
        alert(res.message)

       }
   })
  }

  stime=localStorage.getItem("ctime")

    endtime:any="";

   etime=localStorage.getItem("etime")


  taskdata={
    email:this.email1,
    stime:this.stime,
    etime:this.etime,
    date:this.date

  }


  submittask(){
    this.endtime = new Date().getTime()
    localStorage.setItem("etime" , this.endtime)
    alert("Submitted")
    this.userService.submittask(this.taskdata).subscribe((data)=>{
      console.log(data)
    })


  }

   
  ngOnInit(): void {
  }

}
