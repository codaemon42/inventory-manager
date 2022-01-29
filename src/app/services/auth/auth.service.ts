import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRes } from 'src/app/pages/auth/auth.model';
import { take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _loggedIn = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this._loggedIn = !!this.accessToken;
    console.log(this.accessToken);
    if(this._loggedIn){
      console.log('logged in');
    } else {
      console.log('logged out');
    }
  }

  get loggedIn() {
    return this._loggedIn;
  }

  get accessToken(){
    return localStorage.getItem('access_token');
  }

  updateToken(value){
    localStorage.setItem('access_token', value);
  }

  login(username, password){
    return this.http.post<UserRes>(`${environment.url.base}/users/login`, {username, password}).pipe(
      take(1),
      tap(userRes=>{
        if(userRes && userRes.success){
          this.updateToken(userRes.data.token);
          localStorage.setItem('user', JSON.stringify(userRes.data.user));
        }

        return userRes.success;
      })
    )
  }

  validateAuth(res){
    if(res && !res.success && res.status === 401){
      this.updateToken('');
      this._loggedIn = false;
      this.router.navigateByUrl('auth');
      window.location.reload();
      return;
    }
  }
}
