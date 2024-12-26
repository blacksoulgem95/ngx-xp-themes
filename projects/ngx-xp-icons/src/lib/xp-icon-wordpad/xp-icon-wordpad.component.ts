
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wordpad',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wordpad.component.html',
  styleUrl: './xp-icon-wordpad.component.css'
})
export class XpIconWordpadComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
