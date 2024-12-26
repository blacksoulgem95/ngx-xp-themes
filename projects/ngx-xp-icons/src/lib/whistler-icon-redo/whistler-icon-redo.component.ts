
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-redo',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-redo.component.html',
  styleUrl: './whistler-icon-redo.component.css'
})
export class WhistlerIconRedoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
