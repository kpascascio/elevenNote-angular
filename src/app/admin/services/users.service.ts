import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const ApiUrl = 'http://kcpelevennoteapie.azurewebsites.net/';
const ApiUrl = 'http://localhost:49868/';

@Injectable()
export class UsersService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(`${ApiUrl}api/ManageUsers`);
  }

}
