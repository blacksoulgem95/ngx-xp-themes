
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-undo',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-undo.component.html',
  styleUrl: './xp-icon-undo.component.css'
})
export class XpIconUndoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
