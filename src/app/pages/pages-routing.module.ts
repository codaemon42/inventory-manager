import { AuthGuard } from './auth.guard';
import { AuthModule } from './auth/auth.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'inventory',
        loadChildren: () => import('../pages/inventory/inventory.module').then(m => m.InventoryModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'products',
        loadChildren: () => import('../pages/product/product.module').then(m => m.ProductModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'catalogs',
        loadChildren: () => import('../pages/catalog/catalog.module').then(m => m.CatalogModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'variants',
        loadChildren: () => import('../pages/variants/variants.module').then(m => m.VariantsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'accounts',
        loadChildren: () => import('../pages/accounts/accounts.module').then(m => m.AccountsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('../pages/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PageRoutingModule { }
