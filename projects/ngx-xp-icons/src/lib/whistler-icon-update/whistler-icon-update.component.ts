
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-update',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './whistler-icon-update.component.html',
  styleUrl: './whistler-icon-update.component.css'
})
export class WhistlerIconUpdateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
