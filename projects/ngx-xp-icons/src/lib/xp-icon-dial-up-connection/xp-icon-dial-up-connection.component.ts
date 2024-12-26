
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dial-up-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dial-up-connection.component.html',
  styleUrl: './xp-icon-dial-up-connection.component.css'
})
export class XpIconDialUpConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
