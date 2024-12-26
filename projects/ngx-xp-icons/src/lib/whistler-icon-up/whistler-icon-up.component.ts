
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-up',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-up.component.html',
  styleUrl: './whistler-icon-up.component.css'
})
export class WhistlerIconUpComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
