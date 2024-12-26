
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-notepad',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-notepad.component.html',
  styleUrl: './xp-icon-notepad.component.css'
})
export class XpIconNotepadComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
