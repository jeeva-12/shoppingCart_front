import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {

  name=""
  phnno=""
  email=""
  address=""
  
  password=""
  conpassword=""

  
constructor(private api:ApiService,router:Router){}


  readuserreg=()=>
  {
    let data:any={
      "name":this.name,
      "address":this.address,
      "phnno":this.phnno,
      "email":this.email,
      
      "password":this.password,
      "conpassword":this.password
  }
    console.log(data)


    this.api.addUser(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("user registered successfully")
          this.name=""
          this.address=""
          this.phnno=""
          this.email=""
          this.password=""
          this.conpassword=""
             
      } else {
        alert("something went wrong")
      }
    }
  )

  }
}