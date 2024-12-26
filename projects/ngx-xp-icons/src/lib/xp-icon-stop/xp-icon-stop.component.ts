
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-stop',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-stop.component.html',
  styleUrl: './xp-icon-stop.component.css'
})
export class XpIconStopComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
