
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-microsoft-windows-network',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-microsoft-windows-network.component.html',
  styleUrl: './xp-icon-microsoft-windows-network.component.css'
})
export class XpIconMicrosoftWindowsNetworkComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
