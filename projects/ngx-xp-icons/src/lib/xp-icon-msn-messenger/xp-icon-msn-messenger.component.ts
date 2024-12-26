
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-msn-messenger',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-msn-messenger.component.html',
  styleUrl: './xp-icon-msn-messenger.component.css'
})
export class XpIconMsnMessengerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
