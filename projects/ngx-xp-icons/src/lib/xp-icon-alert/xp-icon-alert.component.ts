
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-alert',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-alert.component.html',
  styleUrl: './xp-icon-alert.component.css'
})
export class XpIconAlertComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
