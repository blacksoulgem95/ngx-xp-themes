
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-cd-rw',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-cd-rw.component.html',
  styleUrl: './xp-icon-cd-rw.component.css'
})
export class XpIconCdRwComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
