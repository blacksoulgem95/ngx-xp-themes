
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-capture-live-content-for-streaming',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-wme-capture-live-content-for-streaming.component.html',
  styleUrl: './xp-icon-wme-capture-live-content-for-streaming.component.css'
})
export class XpIconWmeCaptureLiveContentForStreamingComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
