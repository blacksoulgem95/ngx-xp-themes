
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-game-controller',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-game-controller.component.html',
  styleUrl: './xp-icon-game-controller.component.css'
})
export class XpIconGameControllerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
