import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NgxBarcodeModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
