
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-my-computer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-my-computer.component.html',
  styleUrl: './xp-icon-my-computer.component.css'
})
export class XpIconMyComputerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
