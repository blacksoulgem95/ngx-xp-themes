
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-play',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-play.component.html',
  styleUrl: './xp-icon-play.component.css'
})
export class XpIconPlayComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
