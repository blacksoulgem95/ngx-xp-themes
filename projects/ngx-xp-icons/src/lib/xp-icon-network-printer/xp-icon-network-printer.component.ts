
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-printer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-printer.component.html',
  styleUrl: './xp-icon-network-printer.component.css'
})
export class XpIconNetworkPrinterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
