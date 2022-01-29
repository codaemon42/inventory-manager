

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from './catalog.component';


const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'add',
    loadChildren: () => import('../catalog/add-catalog/add-catalog.module').then(m=>m.AddCatalogModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule { }
