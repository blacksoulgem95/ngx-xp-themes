
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-my-games',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-my-games.component.html',
  styleUrl: './longhorn-icon-my-games.component.css'
})
export class LonghornIconMyGamesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
