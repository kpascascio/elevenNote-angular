import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

const ApiUrl = 'http://localhost:49868/api/Account/isAdmin';

@Injectable()
export class AdminGuard implements CanActivate {


    constructor(private http: HttpClient) { }

    canActivate(): Observable<boolean> {
        return this.http.get(`${ApiUrl}`).map(isAdmin => {
            if (!isAdmin) { return false; }
            return true;
        });
    }

}
