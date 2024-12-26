
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-send-a-fax',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-send-a-fax.component.html',
  styleUrl: './xp-icon-send-a-fax.component.css'
})
export class XpIconSendAFaxComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
