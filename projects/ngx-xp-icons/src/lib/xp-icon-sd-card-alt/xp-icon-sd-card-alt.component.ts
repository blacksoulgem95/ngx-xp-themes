
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sd-card-alt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sd-card-alt.component.html',
  styleUrl: './xp-icon-sd-card-alt.component.css'
})
export class XpIconSdCardAltComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
