
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-server-license',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-server-license.component.html',
  styleUrl: './xp-icon-server-license.component.css'
})
export class XpIconServerLicenseComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
