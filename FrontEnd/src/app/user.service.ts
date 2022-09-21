import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  server_address: string = 'http://localhost:3000';

constructor(private http:HttpClient) { }

checkuser(data:any){
  return this.http.post<any>(`${this.server_address}/user/checkdata/` ,{data:data})

}

submittask(data:any){
  return this.http.post<any>(`${this.server_address}/user/submittask/` ,{data:data})

}


}
