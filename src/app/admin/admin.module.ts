import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersService } from './services/users.service';
import { MatButtonModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    UsersService
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
