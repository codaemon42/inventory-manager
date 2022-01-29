import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  processing = false;
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [ Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'change'
      })
    });

  }

  onSubmit() {
    this.processing = true;
    console.log(this.productForm.value);
    this.productService.add(this.productForm.value).subscribe(res=>{
      this.processing = false;
      this.route.navigateByUrl('products');
    });

  }

}
