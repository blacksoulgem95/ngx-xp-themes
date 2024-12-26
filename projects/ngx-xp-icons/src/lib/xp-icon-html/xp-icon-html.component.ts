
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-html',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-html.component.html',
  styleUrl: './xp-icon-html.component.css'
})
export class XpIconHtmlComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
