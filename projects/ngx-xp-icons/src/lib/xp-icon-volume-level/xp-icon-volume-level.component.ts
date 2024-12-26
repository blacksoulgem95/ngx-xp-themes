
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-volume-level',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-volume-level.component.html',
  styleUrl: './xp-icon-volume-level.component.css'
})
export class XpIconVolumeLevelComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
