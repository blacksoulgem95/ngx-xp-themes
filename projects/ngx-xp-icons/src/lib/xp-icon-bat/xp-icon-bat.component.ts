
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-bat',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-bat.component.html',
  styleUrl: './xp-icon-bat.component.css'
})
export class XpIconBatComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
