
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-bridged-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-bridged-connection.component.html',
  styleUrl: './xp-icon-bridged-connection.component.css'
})
export class XpIconBridgedConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
