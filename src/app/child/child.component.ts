import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() productData;

  @Output() subRating = new EventEmitter();

  subRate(r){
    this.productData.rating=r;
    console.log("child",this.productData)
    this.subRating.emit(this.productData);
  }

}
