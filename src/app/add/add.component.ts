import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title=""
  price=""
  description=""
  image=""
  category=""

  readValues=()=>
  {
    let data:any=
    { "title":this.title, "price":this.price, "description":this.description, "category":this.category, "image":this.image}
    console.log(data)
  }

}
