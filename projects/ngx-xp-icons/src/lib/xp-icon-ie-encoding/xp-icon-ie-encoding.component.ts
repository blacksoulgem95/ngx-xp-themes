
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-encoding',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-encoding.component.html',
  styleUrl: './xp-icon-ie-encoding.component.css'
})
export class XpIconIeEncodingComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
