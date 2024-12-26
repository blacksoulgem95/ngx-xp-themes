
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-presentation-host4',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './longhorn-icon-presentation-host4.component.html',
  styleUrl: './longhorn-icon-presentation-host4.component.css'
})
export class LonghornIconPresentationHost4Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
