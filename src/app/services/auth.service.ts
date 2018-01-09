import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// const Api_Url = 'http://kcpelevennoteapie.azurewebsites.net';
const Api_Url = 'http://localhost:49868';

@Injectable()
export class AuthService {
  userInfo = new Subject<{}>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}/Token`, str).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      localStorage.setItem('user', token.userName);
      this.userInfo.next({
        isloggedin: true,
        user: token.userName
      });
      this._router.navigate(['/notes']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`);
  }

  logout(): Observable<Object> {
    localStorage.clear();
    this.userInfo.next(false);
    console.log('here');
    this._router.navigate(['/login']);
    return this._http.post(`${Api_Url}/api/Account/Logout`, null);
  }
}
