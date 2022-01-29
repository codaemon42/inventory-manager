import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.scss']
})
export class AddCatalogComponent implements OnInit {

  processing = false;
  catalogForm: FormGroup;
  constructor(
    private catalogService: CatalogService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.catalogForm = new FormGroup({
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
    console.log(this.catalogForm.value);
    this.catalogService.add(this.catalogForm.value).subscribe(res=>{
      this.processing = false;
      this.route.navigateByUrl('catalogs');
    });

  }

}
