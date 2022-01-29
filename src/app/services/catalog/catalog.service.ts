import { AuthService } from './../auth/auth.service';
import { Catalog } from './../../pages/catalog/catalog.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

_catalog = new BehaviorSubject<Catalog[]>([])

  constructor(private http: HttpClient, private authService: AuthService) { }

  get catalog() {
    return this._catalog.asObservable();
  }

  fetch() {
    const headers = this.headerOptions();
    return this.http.get<Catalog[]>(`${environment.url.base}/catalog`, headers).pipe(
      take(1),
      tap(products=>{
        this.authService.validateAuth(products);
        console.log(products);
        this._catalog.next(products);
        return products;
      })
    )
  }

  add(body){
    const headers = this.headerOptions();
    return this.http.post<any>(`${environment.url.base}/catalog`, body, headers).pipe(
      take(1),
      tap(product=>{
        this.authService.validateAuth(product);
        console.log(product);
        this.catalog.pipe(take(1)).subscribe(products=>{
          const newProducts: any = products;
          newProducts.unshift(product)
          this._catalog.next(newProducts);
        })
        return product;
      })
    )
  }

  delete(id) {
    return this.http.post<any>(`${environment.url.base}/catalog/delete/${id}`, {}, this.headerOptions() ).pipe(
      take(1),
      tap(res => {
        this.authService.validateAuth(res);
        this.catalog.pipe(take(1)).subscribe(products=>{
          const newProducts = products.filter(p=> p.id !== id);
          this._catalog.next(newProducts);
          return res;
        })
      })
    );
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
