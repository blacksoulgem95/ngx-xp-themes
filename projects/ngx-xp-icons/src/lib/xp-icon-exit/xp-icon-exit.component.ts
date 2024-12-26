
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-exit',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-exit.component.html',
  styleUrl: './xp-icon-exit.component.css'
})
export class XpIconExitComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
