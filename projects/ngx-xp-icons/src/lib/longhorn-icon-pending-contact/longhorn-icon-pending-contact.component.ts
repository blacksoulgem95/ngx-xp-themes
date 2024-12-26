
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-pending-contact',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-pending-contact.component.html',
  styleUrl: './longhorn-icon-pending-contact.component.css'
})
export class LonghornIconPendingContactComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
