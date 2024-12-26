
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-antenna',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xpsp2-icon-antenna.component.html',
  styleUrl: './xpsp2-icon-antenna.component.css'
})
export class XpSP2IconAntennaComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
