
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-forward',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-forward.component.html',
  styleUrl: './whistler-icon-forward.component.css'
})
export class WhistlerIconForwardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
