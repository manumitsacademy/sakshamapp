import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  selectedProduct;

  products=[
    {name:"Samsung s8",rating:"4.3",price:"90000",model:"samsung",img:"https://www.achheydeal.com/wp-content/uploads/2017/11/Samsung-Galaxy-A5-2016-Refurbished-Android-Mobile-Phone.jpg"},
    {name:"Oppo f7",rating:"4.8",price:"45000",model:"oppo",img:"https://images.financialexpress.com/2017/08/redmi-4a.jpg"},
    {name:"Vivi g9",rating:"4.7",price:"51000",model:"Vivo",img:"https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/YU_Yureka_2/YU_Yureka_2_L_1.jpg"},
    {name:"AppleX",rating:"1.5",price:"900",model:"Apple",img:"http://www.vodafone.co.nz/MEDIA_ProductCatalog/m1650104_iPhoneX-spacegrey-frameV2.png"},
    {name:"Motog8",rating:"4.5",price:"89000",model:"Motorola",img:"https://images.techhive.com/images/article/2017/02/android-phones-at-mobile-world-congress-2017-7-100710785-large.jpg"},
  ];

  selectProd(ind){
    this.selectedProduct=this.products[ind];
    this.selectedProduct['i']=ind;
  }

  saveRating(e:Event){
    console.log("parent",e['i']);
    let index=e['i'];
    this.products[index].rating=e['rating'];
  }
  constructor() { }

  ngOnInit() {
  }

}
