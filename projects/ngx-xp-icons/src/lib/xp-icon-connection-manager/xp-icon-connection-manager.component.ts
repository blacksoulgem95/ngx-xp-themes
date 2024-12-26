
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-connection-manager',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-connection-manager.component.html',
  styleUrl: './xp-icon-connection-manager.component.css'
})
export class XpIconConnectionManagerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
