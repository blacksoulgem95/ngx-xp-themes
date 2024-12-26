
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-computer-to-computer-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-computer-to-computer-connection.component.html',
  styleUrl: './xp-icon-computer-to-computer-connection.component.css'
})
export class XpIconComputerToComputerConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
