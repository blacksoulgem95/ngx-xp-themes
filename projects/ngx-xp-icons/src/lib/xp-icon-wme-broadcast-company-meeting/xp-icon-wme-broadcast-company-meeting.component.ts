
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-broadcast-company-meeting',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-wme-broadcast-company-meeting.component.html',
  styleUrl: './xp-icon-wme-broadcast-company-meeting.component.css'
})
export class XpIconWmeBroadcastCompanyMeetingComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
