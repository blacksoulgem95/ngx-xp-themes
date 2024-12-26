
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-rtc-share',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-rtc-share.component.html',
  styleUrl: './xp-icon-rtc-share.component.css'
})
export class XpIconRtcShareComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
