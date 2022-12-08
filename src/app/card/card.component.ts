import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  pname=""
 constructor(private api:ApiService){}

 searchdata:any=[]

  readValue=()=>{
    let data ={"pname":this.pname}
    console.log(data)

    this.api.searchproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid product name")
        }else{
          this.searchdata = response;
        }
      }
    )
  }
}
