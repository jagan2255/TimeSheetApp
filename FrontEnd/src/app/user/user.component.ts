import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  

  constructor(private route:Router) { }

  btnclk1(){
    localStorage.clear()
    this.route.navigate(["/"])
  }
  btnclk2(){
    this.route.navigate(["/user"])
  }

  ngOnInit(): void {
  }

}
