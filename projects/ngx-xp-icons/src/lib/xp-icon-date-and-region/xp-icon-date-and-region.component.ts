
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-date-and-region',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-date-and-region.component.html',
  styleUrl: './xp-icon-date-and-region.component.css'
})
export class XpIconDateAndRegionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
