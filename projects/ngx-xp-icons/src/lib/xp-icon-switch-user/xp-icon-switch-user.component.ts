
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-switch-user',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-switch-user.component.html',
  styleUrl: './xp-icon-switch-user.component.css'
})
export class XpIconSwitchUserComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
