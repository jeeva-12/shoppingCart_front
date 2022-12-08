import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchproduct=()=>
  {
    return this.http.get("http://localhost:8080/viewproduct")
  }
  addproduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addproduct",dataToSend)
  }
  searchproduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchproduct",dataToSend)
  }
  addUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addus",dataToSend)
  }
  searchUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/usersearch",dataToSend)
  }
  
}
