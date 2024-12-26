
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-compose-a-fax',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-compose-a-fax.component.html',
  styleUrl: './xp-icon-compose-a-fax.component.css'
})
export class XpIconComposeAFaxComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
