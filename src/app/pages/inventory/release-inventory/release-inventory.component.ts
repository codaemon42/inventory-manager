import { InventoryService } from './../../../services/inventory/inventory.service';
import { Inventory } from './../inventory.model';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { Accounts } from '../../accounts/accounts.model';

@Component({
  selector: 'app-release-inventory',
  templateUrl: './release-inventory.component.html',
  styleUrls: ['./release-inventory.component.scss']
})
export class ReleaseInventoryComponent implements OnInit, AfterViewInit {
  @ViewChild('barRef', {static: false}) barRef: ElementRef;

  inventoryData: Accounts[] = [];

  interval;
  barcode = '';
  barCodes: any[] = [];

  demoValue = 4;

  constructor(
    private accountsService: AccountsService,
    private inventoryService: InventoryService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      this.barRef.nativeElement.focus();
      setInterval(()=>{
        this.barRef.nativeElement.focus();
      }, 2000);
  }

  onConfirm(id){
    const item = this.inventoryData.find(i=>i.id === id);
    item['quantity'] = item.total_quantity;
    item['type'] = 'stock_out';
    item['unit_price'] = item.total_quantity;
    delete item.total_quantity;
    delete item.total_price;
    delete item.id;
    const inventory: any = item;
    this.inventoryService.add(inventory).subscribe(data=> console.log(data));
    console.log(item);
  }

  keydown(e){
    e.preventDefault();
    console.log(e);
    console.log('e');
    if(this.interval){
      clearInterval(this.interval);
    }

    if(e.key === 'Tab'){
      console.log('enter');
      if(this.barcode) {
        this.barRef.nativeElement.innerHTML = this.barcode;
        this.barCodes.push(this.barcode);
        this.getInventory(this.barcode);
        this.barcode = '';
        return;
      }
    }

    if(e.key !== 'Shift') {
      this.barcode += e.key;
    }

    this.interval = setInterval(()=> this.barcode = '', 500);
  }


  getInventory(barcode){
    const bar = barcode;
    const [product_id, variant_id, account_id] = bar.split('c');
    console.log(product_id, variant_id, account_id);
    console.log('this.inventoryData:', this.inventoryData)
    const accExists = this.inventoryData.find(i=>i.id === +account_id);
    console.log(product_id, variant_id, account_id);
    console.log('accExists : ', accExists);
    if( accExists ) {
      console.log('accExists');
      this.inventoryData.map(i=>{
        if( i.id === +account_id ) {
          console.log('accExists id found');
          i.total_quantity += 1
        }
      });
    }
    else {
      this.accountsService.getSingle(account_id).subscribe( acc =>{
        if( acc ) {
          acc.total_quantity = 1;
          this.inventoryData = [
            ...this.inventoryData,
            acc
          ];
          console.log(this.inventoryData);
        }
      })
    }
  }


}
