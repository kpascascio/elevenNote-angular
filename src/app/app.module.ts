import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { NotesService } from './services/notes.service';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { NoteDetailsComponent } from './components/note/note-details/note-details.component';
import { NoteDeleteComponent } from './components/note/note-delete/note-delete.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { TruncatePipe } from './pipes/userId.pipe';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'notes', canActivate: [AuthGuard] , children: [
      { path: '', component: NoteIndexComponent },
      { path: 'create', component: NoteCreateComponent },
      { path: 'detail/:id', component: NoteDetailsComponent},
      { path: 'edit/:id', component: NoteEditComponent},
      { path: 'delete/:id', component: NoteDeleteComponent}
    ]
  },
  { path: 'admin', canActivate: [ AdminGuard ] , children: [
    { path: '', component: DashboardComponent }
  ] },
  { path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent,
    NoteCreateComponent,
    NoteDetailsComponent,
    NoteDeleteComponent,
    NoteEditComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    AdminModule
  ],
  exports: [TruncatePipe],
  providers: [
    AuthService,
    NotesService,
    AuthGuard,
    AdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
