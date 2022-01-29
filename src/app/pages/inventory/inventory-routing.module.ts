import { ReleaseInventoryModule } from './release-inventory/release-inventory.module';
import { InventoryComponent } from './inventory.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: InventoryComponent
  },
  {
    path: 'add',
    loadChildren: () => import('../inventory/add-inventory/add-inventory.module').then(m=>m.AddInventoryModule)
  },
  {
    path: 'release',
    loadChildren: () => import('../inventory/release-inventory/release-inventory.module').then(m=>m.ReleaseInventoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule { }
