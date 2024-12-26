
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-stop',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-stop.component.html',
  styleUrl: './xp-icon-ie-stop.component.css'
})
export class XpIconIeStopComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
