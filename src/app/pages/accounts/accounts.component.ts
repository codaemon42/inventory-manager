import { ExcelService } from './../../services/shared/excel.service';
import { AccountsService } from './../../services/accounts/accounts.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Accounts } from './accounts.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Accounts[] = [];
  accountsSub: Subscription;
  constructor(private accountsService: AccountsService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.accountsInit();
  }

  accountsInit() {
    this.accountsService.fetch().subscribe();
    this.accountsSub = this.accountsService.items.subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  downloadBarCodes(){
    const exportData = [];
    this.accounts.map(item => {
      const datum = {
        id: item.id,
        product_title: item.product_title,
        variant_title: item.variant_title,
        barcode: item.product_id+'c'+item.variant_id+'c'+item.id
      }
      exportData.push(datum);
    });
    this.excelService.exportAsExcelFile(exportData, 'sample');
  }

  ngOnDestroy(): void {
      this.accountsSub.unsubscribe();
  }

}
