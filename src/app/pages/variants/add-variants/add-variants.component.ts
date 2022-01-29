import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogService } from 'src/app/services/catalog/catalog.service';
import { VariantsService } from 'src/app/services/variants/variants.service';
import { Catalog } from '../../catalog/catalog.model';

@Component({
  selector: 'app-add-variants',
  templateUrl: './add-variants.component.html',
  styleUrls: ['./add-variants.component.scss']
})
export class AddVariantsComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChild('barInput', {static: false}) barInput: ElementRef;
  processing = false;
  variantsForm: FormGroup;

  catalogSub: Subscription;
  catalog: Catalog[] = [];

  // barcode=null;

  isLoading = true;


  constructor(
    private variantsService: VariantsService,
    private catalogService: CatalogService,
    private route: Router
    ) {}

  ngOnInit(): void {

    this.catalogInit();
    this.variantsForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [ Validators.required]
      }),
      catalog_id: new FormControl(null, {
        updateOn: 'change',
        validators: [ Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'change'
      })
    });

  }

  ngAfterViewInit(): void {
      // this.barInput.nativeElement.focus();
      // this.barInput.nativeElement.value = "2";
  }

  catalogInit() {
    this.catalogSub = this.catalogService.catalog.subscribe(catalog => {
      this.catalog = catalog;
      if(catalog.length <= 0) {
        this.catalogService.fetch().subscribe(()=>this.isLoading=false);
      }
    });
  }

  onSubmit() {
    this.processing = true;
    const catalog = this.catalog.find(c=>c.id === this.variantsForm.value.catalog_id);
    this.variantsForm.value.catalog_title = catalog.title;
    console.log(this.variantsForm.value);
    this.variantsService.add(this.variantsForm.value).subscribe(res=>{
      this.processing = false;
      this.route.navigateByUrl('variants');
    });

  }

  onKey(e){
    // setTimeout(()=>{
    //   this.barcode=e.target.value;
    // this.barInput.nativeElement.focus();
    // },200)
  //     //usually scanners throw an 'Enter' key at the end of read
  //  if (e.keyCode === 13) {
  //         if(code.length > 10) {
  //           console.log(code);
  //           /// code ready to use
  //           code = "";
  //        }
  //   } else {
  //       code += e.key; //while this is not an 'enter' it stores the every key
  //   }

  //   //run a timeout of 200ms at the first read and clear everything
  //   if(!reading) {
  //       reading = true;
  //       setTimeout(() => {
  //           code = "";
  //           reading = false;
  //       }, 200);  //200 works fine for me but you can adjust it
  //   }
  }

  ngOnDestroy(): void {
      this.catalogSub.unsubscribe();
  }

  // 3c3c3

}
