import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductRoutingModule } from './add-product-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzAlertModule,
    NzSpinModule,
    ReactiveFormsModule,
    AddProductRoutingModule
  ]
})
export class AddProductModule { }
