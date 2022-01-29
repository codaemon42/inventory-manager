import { AuthService } from './../auth/auth.service';
import { environment } from './../../../environments/environment';
import { Product } from './../../pages/product/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

_product = new BehaviorSubject<Product[]>([])

  constructor(private http: HttpClient, private authService: AuthService) { }

  get product() {
    return this._product.asObservable();
  }

  fetch() {
    const headers = this.headerOptions();
    return this.http.get<Product[]>(`${environment.url.base}/products`, headers).pipe(
      take(1),
      tap(products=>{
        this.authService.validateAuth(products);
        console.log(products);
        this._product.next(products);
        return products;
      }),
      catchError(() => of([]))
    )
  }

  search(title) {
    const headers = this.headerOptions();
    return this.http.get<Product[]>(`${environment.url.base}/products/search/${title}`, headers).pipe(
      take(1),
      tap(products=>{
        this.authService.validateAuth(products);
        console.log(products);
        //this._product.next(products);
        return products;
      }),
      catchError(() => of([]))
    )
  }

  add(body){
    const headers = this.headerOptions();
    return this.http.post<any>(`${environment.url.base}/products`, body, headers).pipe(
      take(1),
      tap(product=>{
        this.authService.validateAuth(product);
        console.log(product);
        this.product.pipe(take(1)).subscribe(products=>{
          const newProducts: any = products;
          newProducts.unshift(product)
          this._product.next(newProducts);
        })
        return product;
      })
    )
  }

  delete(id) {
    return this.http.post<any>(`${environment.url.base}/products/delete/${id}`, {}, this.headerOptions() ).pipe(
      take(1),
      tap(res => {
        this.product.pipe(take(1)).subscribe(products=>{
          this.authService.validateAuth(products);
          const newProducts = products.filter(p=> p.id !== id);
          this._product.next(newProducts);
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
