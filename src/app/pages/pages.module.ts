import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './pages-routing.module';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
