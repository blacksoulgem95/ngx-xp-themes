
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-back',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-back.component.html',
  styleUrl: './whistler-icon-back.component.css'
})
export class WhistlerIconBackComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
