
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-help-and-support',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-help-and-support.component.html',
  styleUrl: './xp-icon-help-and-support.component.css'
})
export class XpIconHelpAndSupportComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
