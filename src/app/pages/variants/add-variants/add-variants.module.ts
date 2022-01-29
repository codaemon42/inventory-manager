import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AddVariantsRoutingModule } from './add-variants-routing.module';
import { AddVariantsComponent } from './add-variants.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
@NgModule({
  declarations: [AddVariantsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzAlertModule,
    NzSpinModule,
    NzSelectModule,
    ReactiveFormsModule,
    AddVariantsRoutingModule
  ]
})
export class AddVariantsModule { }
