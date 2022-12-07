import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {


  productName=""
  image=""
  category=""
  description=""
  price=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={
      "name":this.productName,
      "image":this.image,
      "description":this.description,
      "category":this.category,
      "price":this.price
    }
    console.log(data)

    this.api.addproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          this.productName=""
          this.image=""
          this.description=""
          this.category=""
          this.price=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }

}
