
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-back',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-back.component.html',
  styleUrl: './xp-icon-back.component.css'
})
export class XpIconBackComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
