
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-stop',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-ie-stop.component.html',
  styleUrl: './whistler-icon-ie-stop.component.css'
})
export class WhistlerIconIeStopComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
