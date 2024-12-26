
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-erase',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-erase.component.html',
  styleUrl: './xp-icon-erase.component.css'
})
export class XpIconEraseComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
