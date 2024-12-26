
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-css',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-css.component.html',
  styleUrl: './xp-icon-css.component.css'
})
export class XpIconCssComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
