
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-journal-viewer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-journal-viewer.component.html',
  styleUrl: './xp-icon-windows-journal-viewer.component.css'
})
export class XpIconWindowsJournalViewerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
