

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCatalogComponent } from "./add-catalog.component";


const routes: Routes = [
  {
    path: '',
    component: AddCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCatalogRoutingModule { }
