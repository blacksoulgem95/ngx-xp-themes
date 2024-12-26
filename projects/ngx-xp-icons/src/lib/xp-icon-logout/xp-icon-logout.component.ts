
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-logout',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-logout.component.html',
  styleUrl: './xp-icon-logout.component.css'
})
export class XpIconLogoutComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
