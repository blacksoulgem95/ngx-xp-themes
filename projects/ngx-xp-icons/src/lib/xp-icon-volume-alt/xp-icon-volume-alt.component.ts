
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-volume-alt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-volume-alt.component.html',
  styleUrl: './xp-icon-volume-alt.component.css'
})
export class XpIconVolumeAltComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
