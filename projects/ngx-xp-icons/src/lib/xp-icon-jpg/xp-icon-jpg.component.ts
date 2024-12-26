
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-jpg',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-jpg.component.html',
  styleUrl: './xp-icon-jpg.component.css'
})
export class XpIconJpgComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
