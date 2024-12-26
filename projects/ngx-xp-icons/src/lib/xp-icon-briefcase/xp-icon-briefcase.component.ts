
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-briefcase',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-briefcase.component.html',
  styleUrl: './xp-icon-briefcase.component.css'
})
export class XpIconBriefcaseComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
