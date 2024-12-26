
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-broadcast-live-event',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wme-broadcast-live-event.component.html',
  styleUrl: './xp-icon-wme-broadcast-live-event.component.css'
})
export class XpIconWmeBroadcastLiveEventComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
