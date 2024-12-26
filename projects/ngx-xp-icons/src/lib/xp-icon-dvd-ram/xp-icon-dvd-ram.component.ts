
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dvd-ram',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dvd-ram.component.html',
  styleUrl: './xp-icon-dvd-ram.component.css'
})
export class XpIconDvdRamComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
