
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-new-contact',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './longhorn-icon-new-contact.component.html',
  styleUrl: './longhorn-icon-new-contact.component.css'
})
export class LonghornIconNewContactComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
