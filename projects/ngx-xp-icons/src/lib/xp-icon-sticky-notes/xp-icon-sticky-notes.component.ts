
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sticky-notes',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sticky-notes.component.html',
  styleUrl: './xp-icon-sticky-notes.component.css'
})
export class XpIconStickyNotesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
