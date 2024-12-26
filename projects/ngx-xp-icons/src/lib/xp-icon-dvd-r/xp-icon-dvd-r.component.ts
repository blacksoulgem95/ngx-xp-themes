
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dvd-r',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dvd-r.component.html',
  styleUrl: './xp-icon-dvd-r.component.css'
})
export class XpIconDvdRComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
