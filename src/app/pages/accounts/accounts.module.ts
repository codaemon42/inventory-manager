import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AccountsComponent } from './accounts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from './accounts-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';



@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NgxBarcodeModule,
    NzButtonModule,
    NzIconModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
