
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-related-web-content',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-related-web-content.component.html',
  styleUrl: './xp-icon-related-web-content.component.css'
})
export class XpIconRelatedWebContentComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
