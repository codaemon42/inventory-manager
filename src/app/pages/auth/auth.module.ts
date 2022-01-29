import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
