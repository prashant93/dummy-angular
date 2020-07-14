import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList = [];
  productDataUrl:string="";
  queryString:string=""
  constructor(private _apiService:DataService) {
    
  }
  ngOnInit(): void {
    this.productDataUrl = "assets/data/productsData.json";
    this.getProductsData();
  }

  getProductsData(){
    this._apiService.getData(this.productDataUrl).subscribe(
      (data:any) => { 
        this.productList = data;
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }

}
