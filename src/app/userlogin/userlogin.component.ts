import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  username=""
  password=""
  constructor(private router:Router){}

  readlogin=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
  }
    console.log(data)

    if (this.username==this.username && this.password==this.password) {

      this.router.navigate(['/searchviewproduct'])
      
      
    } else {
      alert("invalid login")
      
    }
  }

}
