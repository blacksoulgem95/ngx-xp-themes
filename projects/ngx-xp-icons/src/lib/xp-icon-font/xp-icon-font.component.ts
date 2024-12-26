
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-font',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-font.component.html',
  styleUrl: './xp-icon-font.component.css'
})
export class XpIconFontComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
