
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-messenger',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-messenger.component.html',
  styleUrl: './xp-icon-windows-messenger.component.css'
})
export class XpIconWindowsMessengerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
