import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  server_address: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getuser(){
    return this.http.get<any>(`${this.server_address}/admin/getusers/`)
  }

  getuserdetails(i:any){
    return this.http.get<any>(`${this.server_address}/admin/getusersdetails/${i}`)
  
  }

}
