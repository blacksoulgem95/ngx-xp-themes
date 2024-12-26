
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-display-adaptor',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-display-adaptor.component.html',
  styleUrl: './xp-icon-display-adaptor.component.css'
})
export class XpIconDisplayAdaptorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
