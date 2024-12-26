
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-xml',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-xml.component.html',
  styleUrl: './xp-icon-xml.component.css'
})
export class XpIconXmlComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
