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
        console.log(response)
        if(response.length==0){
          alert("Invalid email or password")
          this.email=""
          this.password=""
        }
        else{
          
          this.searchUsers=response;
          this.route.navigate(["searchviewproduct"])

        }
        
          
      }
    )
  
  
  }
}