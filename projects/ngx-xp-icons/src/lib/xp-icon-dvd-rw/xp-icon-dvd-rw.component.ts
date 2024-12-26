
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dvd-rw',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dvd-rw.component.html',
  styleUrl: './xp-icon-dvd-rw.component.css'
})
export class XpIconDvdRwComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
