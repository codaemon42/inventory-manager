import { Variants } from './../../variants/variants.model';
import { Subscription } from 'rxjs';
import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../product/product.model';
import { InventoryService } from './../../../services/inventory/inventory.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VariantsService } from 'src/app/services/variants/variants.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit, OnDestroy {
  psInterval;
  processing = false;
  inventoryForm: FormGroup;
  isLoadingProduct = false;
  products: Product[] = [];

  variantsSub: Subscription;
  variants: Variants[] = [];

  constructor(
    private inventoryService: InventoryService,
    private productService: ProductService,
    private variantsService: VariantsService,
    private route: Router,
    private nzMessage: NzMessageService
  ) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('test'));
    this.variantInit();
    this.inventoryForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'change'
      }),
      type: new FormControl( 'stock_in', {
        updateOn: 'change'
      }),
      product_id: new FormControl(null, {
        updateOn: 'change'
      }),
      product_title: new FormControl(null, {
        updateOn: 'change'
      }),
      variant_id: new FormControl(null, {
        updateOn: 'change'
      }),
      variant_title: new FormControl(null, {
        updateOn: 'change'
      }),
      catalog_id: new FormControl(null, {
        updateOn: 'change'
      }),
      catalog_title: new FormControl(null, {
        updateOn: 'change'
      }),
      unit_price: new FormControl(null, {
        updateOn: 'change'
      }),
      quantity: new FormControl(null, {
        updateOn: 'change'
      }),
    });
  }

  onSubmit() {
    this.processing = true;
    console.log(this.inventoryForm.value);
    const [product_id, product_title] = this.inventoryForm.value.product_id.split('_');
    const [variant_id, variant_title, catalog_id, catalog_title] = this.inventoryForm.value.variant_id.split('_');
    this.inventoryForm.patchValue({
      product_id: +product_id, product_title,
      variant_id: +variant_id, variant_title,
      catalog_id: +catalog_id, catalog_title
      });
      // localStorage.setItem('test', JSON.stringify(this.inventoryForm.value));

    this.inventoryService.add(this.inventoryForm.value).subscribe(res=>{
      this.processing = false;
      if(res){
        this.nzMessage.success('Inventory Added Successfully...', { nzDuration: 2000});
      } else {
        this.nzMessage.error('something went wrong...', { nzDuration: 2000});
      }
      // this.route.navigateByUrl('catalogs');
    });
  }


  variantInit() {
    this.variantsSub = this.variantsService.items.subscribe(variants=>{
      this.variants = variants;
      if(!this.variants || this.variants.length <= 0) {
        this.variantsService.fetch().subscribe();
      }
    })
  }


  onSearchProduct(e) {
    if(this.psInterval){
      clearInterval(this.psInterval);
    }
    this.psInterval = setInterval(()=>{
      console.log(e);
      if(e) {
        this.productService.search(e).subscribe(products => {
          this.products = products;

        })
      }
      clearInterval(this.psInterval);
    },300);
  }

  ngOnDestroy(): void {
      this.variantsSub.unsubscribe();
  }
}
