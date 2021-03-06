import { BannerComponent } from './components/banners/banners.component';
import { HomeComponent } from './components/home/home.component';
import { FilterdataPipe } from './shared/pipes/filter/filterdata.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import {NgbCarouselModule, NgbNavModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    HomeComponent,
    FilterdataPipe,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbNavModule,
    NgbCollapseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
