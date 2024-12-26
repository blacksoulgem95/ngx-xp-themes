
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-capture-live-content-locally',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wme-capture-live-content-locally.component.html',
  styleUrl: './xp-icon-wme-capture-live-content-locally.component.css'
})
export class XpIconWmeCaptureLiveContentLocallyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
