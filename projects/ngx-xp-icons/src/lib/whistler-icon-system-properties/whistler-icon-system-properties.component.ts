
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-system-properties',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-system-properties.component.html',
  styleUrl: './whistler-icon-system-properties.component.css'
})
export class WhistlerIconSystemPropertiesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
