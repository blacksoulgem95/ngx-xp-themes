
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-active-contact',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-active-contact.component.html',
  styleUrl: './longhorn-icon-active-contact.component.css'
})
export class LonghornIconActiveContactComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
