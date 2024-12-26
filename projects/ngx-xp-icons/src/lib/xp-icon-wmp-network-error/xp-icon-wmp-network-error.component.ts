
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-network-error',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-network-error.component.html',
  styleUrl: './xp-icon-wmp-network-error.component.css'
})
export class XpIconWmpNetworkErrorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
