
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-publish-photos-to-web',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-publish-photos-to-web.component.html',
  styleUrl: './xp-icon-publish-photos-to-web.component.css'
})
export class XpIconPublishPhotosToWebComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
