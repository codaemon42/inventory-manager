import { VariantsComponent } from './variants.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { VariantsRoutingModule } from './variants-routing.module';




@NgModule({
  declarations: [VariantsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    VariantsRoutingModule
  ]
})
export class VariantsModule { }
