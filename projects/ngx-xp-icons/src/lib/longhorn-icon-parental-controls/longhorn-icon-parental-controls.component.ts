
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-parental-controls',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-parental-controls.component.html',
  styleUrl: './longhorn-icon-parental-controls.component.css'
})
export class LonghornIconParentalControlsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
