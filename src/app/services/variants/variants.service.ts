import { AuthService } from './../../services/auth/auth.service';
import { Variants } from './../../pages/variants/variants.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VariantsService {
  _items = new BehaviorSubject<Variants[]>([])

  constructor(private http: HttpClient, private authService: AuthService) { }

  get items() {
    return this._items.asObservable();
  }

  fetch() {
    const headers = this.headerOptions();
    return this.http.get<Variants[]>(`${environment.url.base}/variants`, headers).pipe(
      take(1),
      tap(resItems=>{
        this.authService.validateAuth(resItems);
        console.log(resItems);
        this._items.next(resItems);
        return resItems;
      })
    )
  }

  add(body){
    const headers = this.headerOptions();
    return this.http.post<any>(`${environment.url.base}/variants`, body, headers).pipe(
      take(1),
      tap(resItem=>{
        this.authService.validateAuth(resItem);
        console.log(resItem);
        this.items.pipe(take(1)).subscribe(items=>{
          const newItems: any = items;
          newItems.unshift(resItem);
          this._items.next(newItems);
        })
        return resItem;
      })
    )
  }

  delete(id) {
    return this.http.delete<any>(`${environment.url.base}/variants/${id}`, this.headerOptions() ).pipe(
      take(1),
      tap(res => {
        this.authService.validateAuth(res);
        this.items.pipe(take(1)).subscribe(items=>{
          const newItems = items.filter(p=> p.id !== id);
          this._items.next(newItems);
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
