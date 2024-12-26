
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-phone',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-phone.component.html',
  styleUrl: './xp-icon-phone.component.css'
})
export class XpIconPhoneComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
