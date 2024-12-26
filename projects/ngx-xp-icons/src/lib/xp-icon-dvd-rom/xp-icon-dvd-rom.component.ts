
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dvd-rom',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dvd-rom.component.html',
  styleUrl: './xp-icon-dvd-rom.component.css'
})
export class XpIconDvdRomComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
