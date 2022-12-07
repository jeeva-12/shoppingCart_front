import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  username=""
  password=""
  conpassword=""

  constructor(private router:Router){}



  readuserreg=()=>
  {
    let data:any={
      "name":this.name,
      "address":this.address,
      "phnno":this.phnno,
      "email":this.email,
      "username":this.username,
      "password":this.password,
      "conpassword":this.conpassword
  }
    console.log(data)

    if (this.password==this.conpassword) {

      this.router.navigate(['/userlogin'])
      
      
    } else {
      alert("invalid password")
      
    }
  }
}
