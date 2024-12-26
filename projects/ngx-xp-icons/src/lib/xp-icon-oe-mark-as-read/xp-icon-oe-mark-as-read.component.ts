
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-mark-as-read',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-mark-as-read.component.html',
  styleUrl: './xp-icon-oe-mark-as-read.component.css'
})
export class XpIconOeMarkAsReadComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
