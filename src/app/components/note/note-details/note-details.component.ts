import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../../services/notes.service';
import { Note } from '../../../models/Note';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;

  constructor(private _activatedRoute: ActivatedRoute, private _noteService: NotesService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._noteService.getNote(routeData.get('id')).subscribe((singleNote: Note) => {
        this.note = singleNote;
      });
    });
  }

}
