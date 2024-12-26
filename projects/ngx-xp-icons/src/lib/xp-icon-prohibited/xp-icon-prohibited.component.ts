
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-prohibited',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-prohibited.component.html',
  styleUrl: './xp-icon-prohibited.component.css'
})
export class XpIconProhibitedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
