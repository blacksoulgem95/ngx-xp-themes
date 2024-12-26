
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-presentation-host3',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './longhorn-icon-presentation-host3.component.html',
  styleUrl: './longhorn-icon-presentation-host3.component.css'
})
export class LonghornIconPresentationHost3Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
