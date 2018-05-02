import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersService } from './services/users.service';
import { MatButtonModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { TruncatePipe } from '../pipes/userId.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule
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
