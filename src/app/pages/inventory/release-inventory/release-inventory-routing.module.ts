import { ReleaseInventoryComponent } from './release-inventory.component';
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    component: ReleaseInventoryComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReleaseInventoryRoutingModule {}
