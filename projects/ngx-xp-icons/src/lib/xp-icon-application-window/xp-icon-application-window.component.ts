
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-application-window',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-application-window.component.html',
  styleUrl: './xp-icon-application-window.component.css'
})
export class XpIconApplicationWindowComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
