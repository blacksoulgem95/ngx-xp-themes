
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-netmeeting',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-netmeeting.component.html',
  styleUrl: './xp-icon-netmeeting.component.css'
})
export class XpIconNetmeetingComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
