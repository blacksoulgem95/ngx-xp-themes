
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-key',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-key.component.html',
  styleUrl: './xp-icon-key.component.css'
})
export class XpIconKeyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
