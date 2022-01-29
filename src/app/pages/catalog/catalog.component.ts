import { Catalog } from './catalog.model';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  products: Catalog[] = [];

  productSub: Subscription;

  constructor( private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogInit();
  }

  catalogInit() {
    this.productSub = this.catalogService.catalog.subscribe(products => {
      this.products = products;
      if(products.length <= 0) {
        this.catalogService.fetch().subscribe();
      }
    });
  }

  ngOnDestroy(): void {
      this.productSub.unsubscribe();
  }

}
