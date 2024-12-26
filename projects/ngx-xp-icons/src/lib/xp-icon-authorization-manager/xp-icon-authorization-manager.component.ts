
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-authorization-manager',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-authorization-manager.component.html',
  styleUrl: './xp-icon-authorization-manager.component.css'
})
export class XpIconAuthorizationManagerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
