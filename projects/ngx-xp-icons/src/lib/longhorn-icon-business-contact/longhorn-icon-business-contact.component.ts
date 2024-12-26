
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-business-contact',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-business-contact.component.html',
  styleUrl: './longhorn-icon-business-contact.component.css'
})
export class LonghornIconBusinessContactComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
