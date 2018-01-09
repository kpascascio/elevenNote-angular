import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usersDataSource: UsersDataSource | null;
  private usersColumnNames = ['userId', 'email', 'username'];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe(d => {
      console.log(d);
      this.usersDataSource = new UsersDataSource(d);
    });
  }
}

export class UsersDataSource extends DataSource<any> {

  constructor(private usersData) {
    super();
  }
  connect(collectionViewer): Observable<any[]> {
    return Observable.of(this.usersData);
  }
  disconnect(collectionViewer): void { }
}
