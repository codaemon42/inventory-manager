import { InventoryService } from './../../services/inventory/inventory.service';
import { Inventory } from './inventory.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  editCache: { [key: string]: { edit: boolean; data: Inventory } } = {};
  listOfData: Inventory[] = [
    {
		id: 1,
		username: 'naim',
		title: 'inventory',
		description: 'inventory',
		type: 'inventory',
		product_id: 1,
		product_uuid: '1',
		product_title: 'inventory',
		variant_id: 1,
		variant_title: 'inventory',
		catalog_id: 1,
		catalog_title: 'inventory',
		unit_price: 12,
		quantity: 123,
		created_at: 'inventory inventory inventory inventory',
		modified_at: 'inventory',
    },
        {
		id: 2,
		username: 'naim',
		title: 'inventory',
		description: 'inventory',
		type: 'inventory',
		product_id: 1,
		product_uuid: '1',
		product_title: 'inventory',
		variant_id: 1,
		variant_title: 'inventory',
		catalog_id: 1,
		catalog_title: 'inventory',
		unit_price: 12,
		quantity: 123,
		created_at: 'inventory inventory inventory inventory',
		modified_at: 'inventory',
    },
        {
		id: 3,
		username: 'naim',
		title: 'inventory',
		description: 'inventory',
		type: 'inventory',
		product_id: 1,
		product_uuid: '1',
		product_title: 'inventory',
		variant_id: 1,
		variant_title: 'inventory',
		catalog_id: 1,
		catalog_title: 'inventory',
		unit_price: 12,
		quantity: 123,
		created_at: 'inventory inventory inventory inventory',
		modified_at: 'inventory',
    },
  ];
date;
  inventorySub: Subscription;

  constructor(private inventoryService: InventoryService) { }


  ngOnInit(): void {
    this.inventoryInit();
  }

  dateChange(e){
    console.log(e);
    const dateArr = [];
    if(e.length === 2){
      e.map(i=>{
        dateArr.push(i.toISOString());
      });
      const created_at = dateArr.join(',');
      console.log(created_at);
      this.inventoryService.fetchInventory(1, created_at).subscribe();
      console.log('search now');
    }
  }

  inventoryInit() {
    this.inventoryService.fetchInventory().subscribe();
    this.inventorySub = this.inventoryService.inventory.subscribe(inventory => {
      this.listOfData = inventory;
    });
  }

  ngOnDestroy(): void {
      this.inventorySub.unsubscribe();
  }

}
