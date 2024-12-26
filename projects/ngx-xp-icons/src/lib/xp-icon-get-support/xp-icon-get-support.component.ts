
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-get-support',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-get-support.component.html',
  styleUrl: './xp-icon-get-support.component.css'
})
export class XpIconGetSupportComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
