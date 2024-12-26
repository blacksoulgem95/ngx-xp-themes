
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-cut',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-cut.component.html',
  styleUrl: './xp-icon-cut.component.css'
})
export class XpIconCutComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
