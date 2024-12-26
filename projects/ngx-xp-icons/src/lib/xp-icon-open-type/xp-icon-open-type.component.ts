
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-open-type',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-open-type.component.html',
  styleUrl: './xp-icon-open-type.component.css'
})
export class XpIconOpenTypeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
