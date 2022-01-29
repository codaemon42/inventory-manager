import { environment } from './../../../environments/environment';
import { Inventory, InventoryRes } from './../../pages/inventory/inventory.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  _inventory = new BehaviorSubject<Inventory[]>([])

  constructor(private http: HttpClient, private authService: AuthService) { }

  get inventory() {
    return this._inventory.asObservable();
  }

  fetchInventory(page=1, created_at=null) {
    const headers = this.headerOptions();
    let query = `?page=${page}`;
    if (created_at) query += `&created_at=${created_at}`
    return this.http.get<InventoryRes>(`${environment.url.base}/inventory/${query}`, headers).pipe(
      take(1),
      tap(inventoryRes=>{
        this.authService.validateAuth(inventoryRes);
        console.log(inventoryRes);
        this._inventory.next(inventoryRes.data.result);
        return inventoryRes;
      })
    )
  }

    add(body){
    const headers = this.headerOptions();
    return this.http.post<any>(`${environment.url.base}/inventory`, body, headers).pipe(
      take(1),
      tap(resItem=>{
        this.authService.validateAuth(resItem);
        console.log(resItem);
        this.inventory.pipe(take(1)).subscribe(items=>{
          const newItems: any = items;
          newItems.unshift(resItem);
          this._inventory.next(newItems);
        })
        return resItem;
      })
    )
  }

    headerOptions() {
    const token = this.authService.accessToken;
    return {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`})
    };
  }


}


