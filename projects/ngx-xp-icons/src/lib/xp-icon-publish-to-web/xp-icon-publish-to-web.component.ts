
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-publish-to-web',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-publish-to-web.component.html',
  styleUrl: './xp-icon-publish-to-web.component.css'
})
export class XpIconPublishToWebComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
