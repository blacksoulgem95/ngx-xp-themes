
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-cover-page',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax-cover-page.component.html',
  styleUrl: './xp-icon-fax-cover-page.component.css'
})
export class XpIconFaxCoverPageComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
