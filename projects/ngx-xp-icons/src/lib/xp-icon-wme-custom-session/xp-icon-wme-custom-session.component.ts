
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-custom-session',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wme-custom-session.component.html',
  styleUrl: './xp-icon-wme-custom-session.component.css'
})
export class XpIconWmeCustomSessionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
