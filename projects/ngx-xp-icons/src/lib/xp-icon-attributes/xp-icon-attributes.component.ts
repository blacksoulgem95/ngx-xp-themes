
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-attributes',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-attributes.component.html',
  styleUrl: './xp-icon-attributes.component.css'
})
export class XpIconAttributesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
