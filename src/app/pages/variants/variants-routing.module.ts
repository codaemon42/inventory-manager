import { VariantsComponent } from './variants.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: VariantsComponent
  },
  {
    path: 'add',
    loadChildren: () => import('../variants/add-variants/add-variants.module').then(m=>m.AddVariantsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariantsRoutingModule { }
