
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-undo',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-undo.component.html',
  styleUrl: './whistler-icon-undo.component.css'
})
export class WhistlerIconUndoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
