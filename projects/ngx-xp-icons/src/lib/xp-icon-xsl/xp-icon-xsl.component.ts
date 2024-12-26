
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-xsl',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-xsl.component.html',
  styleUrl: './xp-icon-xsl.component.css'
})
export class XpIconXslComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
