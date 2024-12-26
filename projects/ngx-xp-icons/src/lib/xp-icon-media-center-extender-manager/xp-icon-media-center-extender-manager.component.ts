
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-media-center-extender-manager',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-media-center-extender-manager.component.html',
  styleUrl: './xp-icon-media-center-extender-manager.component.css'
})
export class XpIconMediaCenterExtenderManagerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
