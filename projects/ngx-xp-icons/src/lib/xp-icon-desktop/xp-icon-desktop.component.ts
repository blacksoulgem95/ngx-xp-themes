
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-desktop',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-desktop.component.html',
  styleUrl: './xp-icon-desktop.component.css'
})
export class XpIconDesktopComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
