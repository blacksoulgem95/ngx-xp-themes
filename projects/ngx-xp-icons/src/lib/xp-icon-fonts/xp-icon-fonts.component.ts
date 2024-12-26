
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fonts',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fonts.component.html',
  styleUrl: './xp-icon-fonts.component.css'
})
export class XpIconFontsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
