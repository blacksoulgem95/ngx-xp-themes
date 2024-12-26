
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-display-properties',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-display-properties.component.html',
  styleUrl: './xp-icon-display-properties.component.css'
})
export class XpIconDisplayPropertiesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
