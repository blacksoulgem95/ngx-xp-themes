
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-rtf',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-rtf.component.html',
  styleUrl: './xp-icon-rtf.component.css'
})
export class XpIconRtfComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
