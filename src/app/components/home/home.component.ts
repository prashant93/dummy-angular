import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [];
  slideDataUrl: string = "";
  productDataUrl:string ="";
  productList = [];
  constructor(private _apiService: DataService) { }

  ngOnInit(): void {
    this.slideDataUrl = "assets/data/sliderData.json";
    this.productDataUrl = "assets/data/productsData.json";
    this.getSliderData();
    this.getProductData();
  }
  


  getSliderData() {
    this._apiService.getData(this.slideDataUrl).subscribe(
      (data: any) => {
        this.slides = data;
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }
  getProductData() {
    this._apiService.getData(this.productDataUrl).subscribe(
      (data: any) => {
        this.productList = data.slice(Math.max(data.length - 3, 1));
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }

}
