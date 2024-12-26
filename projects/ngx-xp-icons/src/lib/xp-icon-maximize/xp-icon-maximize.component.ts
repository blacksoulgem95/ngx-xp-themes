
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-maximize',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-maximize.component.html',
  styleUrl: './xp-icon-maximize.component.css'
})
export class XpIconMaximizeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
