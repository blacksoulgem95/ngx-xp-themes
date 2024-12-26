
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-help-and-support-index',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-help-and-support-index.component.html',
  styleUrl: './xp-icon-help-and-support-index.component.css'
})
export class XpIconHelpAndSupportIndexComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
