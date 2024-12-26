
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-restart',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-restart.component.html',
  styleUrl: './xp-icon-restart.component.css'
})
export class XpIconRestartComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
