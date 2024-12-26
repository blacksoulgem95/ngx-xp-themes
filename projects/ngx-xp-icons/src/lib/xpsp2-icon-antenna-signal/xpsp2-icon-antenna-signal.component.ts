
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-antenna-signal',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xpsp2-icon-antenna-signal.component.html',
  styleUrl: './xpsp2-icon-antenna-signal.component.css'
})
export class XpSP2IconAntennaSignalComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
