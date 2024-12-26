
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-system-properties',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-system-properties.component.html',
  styleUrl: './xp-icon-system-properties.component.css'
})
export class XpIconSystemPropertiesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
