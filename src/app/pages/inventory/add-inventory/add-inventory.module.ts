import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddInventoryComponent } from './add-inventory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInventoryRoutingModule } from './add-inventory-routing.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';



@NgModule({
  declarations: [AddInventoryComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzSpinModule,
    NzButtonModule,
    NzSelectModule,
    NzInputNumberModule,
    NzMessageModule,
    ReactiveFormsModule,
    AddInventoryRoutingModule
  ]
})
export class AddInventoryModule { }
