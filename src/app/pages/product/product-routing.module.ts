import { ProductComponent } from './product.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'add',
    loadChildren: () => import('../product/add-product/add-product.module').then(m=>m.AddProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
