
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-power-options',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-power-options.component.html',
  styleUrl: './xp-icon-power-options.component.css'
})
export class XpIconPowerOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
