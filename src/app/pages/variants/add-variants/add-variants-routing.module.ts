

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddVariantsComponent } from "./add-variants.component";


const routes: Routes = [
  {
    path: '',
    component: AddVariantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVariantsRoutingModule { }
