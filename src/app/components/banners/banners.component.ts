import {Component, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannerComponent {
//  @Input slides = [];
 @Input() slides= [];
 
  constructor() { }
  ngOninit(){
  
  }

    
}
