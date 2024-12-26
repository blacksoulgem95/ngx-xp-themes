
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-help-and-support',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-help-and-support.component.html',
  styleUrl: './whistler-icon-help-and-support.component.css'
})
export class WhistlerIconHelpAndSupportComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
