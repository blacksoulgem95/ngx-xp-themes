
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-sd-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-sd-card.component.html',
  styleUrl: './whistler-icon-sd-card.component.css'
})
export class WhistlerIconSdCardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
