import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

import { InventoryComponent } from './inventory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    NzDatePickerModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
