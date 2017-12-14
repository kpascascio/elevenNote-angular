import { Component, OnInit } from '@angular/core';
import { Note } from '../../../models/note';
import { NotesService } from '../../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {

  public note: Note;

  constructor(private _noteService: NotesService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._noteService.getNote(p.get('id')).subscribe((singleNote: Note) => {
        this.note = singleNote;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._noteService.deleteNote(this.note.NoteId).subscribe(() => {
      this._router.navigate(['/notes']);
    });
  }

}
