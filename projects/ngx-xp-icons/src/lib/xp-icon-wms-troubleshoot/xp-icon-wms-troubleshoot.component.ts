
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-troubleshoot',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-troubleshoot.component.html',
  styleUrl: './xp-icon-wms-troubleshoot.component.css'
})
export class XpIconWmsTroubleshootComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
