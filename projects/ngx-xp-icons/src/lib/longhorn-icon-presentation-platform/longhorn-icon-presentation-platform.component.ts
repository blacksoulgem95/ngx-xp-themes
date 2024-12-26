
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-presentation-platform',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './longhorn-icon-presentation-platform.component.html',
  styleUrl: './longhorn-icon-presentation-platform.component.css'
})
export class LonghornIconPresentationPlatformComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
