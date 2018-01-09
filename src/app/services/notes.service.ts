import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/Note';

// const ApiUrl = 'http://kcpelevennoteapie.azurewebsites.net/api';
const ApiUrl = 'http://localhost:49868/api';

@Injectable()
export class NotesService {

  constructor(private _http: HttpClient) { }

  getNotes() {
    return this._http.get(`${ApiUrl}/Notes`);
  }

  createNote(note: Note) {
    return this._http.post(`${ApiUrl}/Notes`, note);
  }

  getNote(id: string) {
    return this._http.get(`${ApiUrl}/Notes/${id}`);
  }

  deleteNote(id: number) {
    return this._http.delete(`${ApiUrl}/Notes/${id}`);
  }

  updateNote(note: Note) {
    return this._http.put(`${ApiUrl}/Notes`, note);
  }
}
