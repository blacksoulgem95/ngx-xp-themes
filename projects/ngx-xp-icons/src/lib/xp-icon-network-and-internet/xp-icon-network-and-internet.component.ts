
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-and-internet',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-and-internet.component.html',
  styleUrl: './xp-icon-network-and-internet.component.css'
})
export class XpIconNetworkAndInternetComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
