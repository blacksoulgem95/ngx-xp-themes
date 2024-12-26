
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-undock-pc',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-undock-pc.component.html',
  styleUrl: './xp-icon-undock-pc.component.css'
})
export class XpIconUndockPcComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
