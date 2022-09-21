import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  server_address: string = 'http://localhost:3000';


  constructor(private http:HttpClient) { }

  userlogin(data:any){
    return this.http.post<any>(`${this.server_address}/user/userlogin`,{data:data})

  }

  adminlogin(data:any){
    return this.http.post<any>(`${this.server_address}/admin/adminlogin`,{data:data})

  }
  adduser(data:any){
    return this.http.post<any>(`${this.server_address}/admin/adduser`,{data:data})
  }
}
