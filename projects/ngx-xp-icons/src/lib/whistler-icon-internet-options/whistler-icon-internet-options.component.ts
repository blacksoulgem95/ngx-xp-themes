
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-internet-options',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-internet-options.component.html',
  styleUrl: './whistler-icon-internet-options.component.css'
})
export class WhistlerIconInternetOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
