
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dvd',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dvd.component.html',
  styleUrl: './xp-icon-dvd.component.css'
})
export class XpIconDvdComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
