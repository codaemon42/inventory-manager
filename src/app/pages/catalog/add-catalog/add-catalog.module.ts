import { AddCatalogComponent } from './add-catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AddCatalogRoutingModule } from './add-catalog-routing.module';

@NgModule({
  declarations: [AddCatalogComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzAlertModule,
    NzSpinModule,
    ReactiveFormsModule,
    AddCatalogRoutingModule
  ]
})
export class AddCatalogModule { }
