
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-entire-network',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-entire-network.component.html',
  styleUrl: './xp-icon-entire-network.component.css'
})
export class XpIconEntireNetworkComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
