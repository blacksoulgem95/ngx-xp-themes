
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-media-center-extender-manager',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-media-center-extender-manager.component.html',
  styleUrl: './xp-icon-media-center-extender-manager.component.css'
})
export class XpIconMediaCenterExtenderManagerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
