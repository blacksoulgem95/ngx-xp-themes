
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-sign',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-sign.component.html',
  styleUrl: './xp-icon-oe-sign.component.css'
})
export class XpIconOeSignComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
