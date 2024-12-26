
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-minesweeper',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-minesweeper.component.html',
  styleUrl: './xp-icon-minesweeper.component.css'
})
export class XpIconMinesweeperComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
