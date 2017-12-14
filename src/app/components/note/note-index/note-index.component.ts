import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { Note } from '../../../models/Note';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.css']
})
export class NoteIndexComponent implements OnInit {

  columnNames = ['details', 'NoteId', 'Title', 'IsStarred', 'CreatedUtc', 'buttons'];
  dataSource: NoteDataSource | null;

  constructor(private _noteService: NotesService) { }

  ngOnInit() {
    this._noteService.getNotes().subscribe((notes: Note[]) => {
      this.dataSource = new NoteDataSource(notes);
    });
  }
}

export class NoteDataSource extends DataSource<any> {

  constructor(private notesData: Note[]) {
    super();
  }

  connect(): Observable<Note[]> {
    return Observable.of(this.notesData);
  }

  disconnect() { }
}
