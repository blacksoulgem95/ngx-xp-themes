
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-mouse',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-mouse.component.html',
  styleUrl: './xp-icon-mouse.component.css'
})
export class XpIconMouseComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
