import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  email=""
  password=""
  searchUsers:any=[]
  constructor(private api:ApiService,private route:Router){}

  readlogin=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.searchUsers(data).subscribe(
      (response:any)=>
      {
        this.email=""
        this.password=""
        
        if(response.stauts =="success"){
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.route.navigate(["/searchviewproduct"])
        }
        else{
          
       alert(response.message)

        }
        
          
      }
    )
  
  
  }
}