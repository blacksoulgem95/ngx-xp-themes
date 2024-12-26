
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-redo',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-redo.component.html',
  styleUrl: './xp-icon-redo.component.css'
})
export class XpIconRedoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
