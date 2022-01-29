import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { ReleaseInventoryComponent } from './release-inventory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseInventoryRoutingModule } from './release-inventory-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputNumberModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [ReleaseInventoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzTableModule,
    NzButtonModule,
    NzInputNumberModule,
    ReleaseInventoryRoutingModule
  ]
})
export class ReleaseInventoryModule { }
