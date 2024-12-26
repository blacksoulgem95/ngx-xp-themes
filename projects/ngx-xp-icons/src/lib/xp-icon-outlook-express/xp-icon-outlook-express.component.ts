
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-outlook-express',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-outlook-express.component.html',
  styleUrl: './xp-icon-outlook-express.component.css'
})
export class XpIconOutlookExpressComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
