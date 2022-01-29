import { ProductService } from './../../services/product/product.service';
import { Product } from './product.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  productSub: Subscription;

  constructor( private productService: ProductService) { }

  ngOnInit() {
    this.productInit();
  }

  productInit() {
    this.productSub = this.productService.product.subscribe(products => {
      this.products = products;
      if(products.length <= 0) {
        this.productService.fetch().subscribe();
      }
    });
  }

  ngOnDestroy(): void {
      this.productSub.unsubscribe();
  }

}
