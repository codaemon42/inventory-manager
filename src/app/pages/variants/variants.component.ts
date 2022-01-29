import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VariantsService } from 'src/app/services/variants/variants.service';
import { Variants } from './variants.model';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.scss']
})
export class VariantsComponent implements OnInit, OnDestroy {

  variants: Variants[] = [];

  variantsSub: Subscription;

  constructor( private variantsService: VariantsService) { }

  ngOnInit() {
    this.variantsInit();
  }

  variantsInit() {
    this.variantsSub = this.variantsService.items.subscribe(products => {
      this.variants = products;
      if(products.length <= 0) {
        this.variantsService.fetch().subscribe();
      }
    });
  }

  ngOnDestroy(): void {
      this.variantsSub.unsubscribe();
  }

}
