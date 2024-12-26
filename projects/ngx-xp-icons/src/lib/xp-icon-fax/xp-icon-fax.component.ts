
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax.component.html',
  styleUrl: './xp-icon-fax.component.css'
})
export class XpIconFaxComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
