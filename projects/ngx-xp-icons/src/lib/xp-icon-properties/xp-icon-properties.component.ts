
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-properties',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-properties.component.html',
  styleUrl: './xp-icon-properties.component.css'
})
export class XpIconPropertiesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
