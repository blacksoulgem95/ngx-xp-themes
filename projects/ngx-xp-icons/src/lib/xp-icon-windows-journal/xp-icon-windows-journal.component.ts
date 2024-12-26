
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-journal',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-journal.component.html',
  styleUrl: './xp-icon-windows-journal.component.css'
})
export class XpIconWindowsJournalComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
