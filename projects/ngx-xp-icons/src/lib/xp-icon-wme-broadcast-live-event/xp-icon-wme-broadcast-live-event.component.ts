
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-broadcast-live-event',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-wme-broadcast-live-event.component.html',
  styleUrl: './xp-icon-wme-broadcast-live-event.component.css'
})
export class XpIconWmeBroadcastLiveEventComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
