
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-journal-note',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-journal-note.component.html',
  styleUrl: './xp-icon-journal-note.component.css'
})
export class XpIconJournalNoteComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
