
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-broadcast-company-meeting',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-wme-broadcast-company-meeting.component.html',
  styleUrl: './xp-icon-wme-broadcast-company-meeting.component.css'
})
export class XpIconWmeBroadcastCompanyMeetingComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
