import { CatalogComponent } from './catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CatalogRoutingModule } from './catalog-routing.module';




@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    NzTableModule,
    NzButtonModule
  ]
})
export class CatalogModule { }
