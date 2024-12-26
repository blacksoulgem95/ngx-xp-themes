
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-privacy',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-privacy.component.html',
  styleUrl: './xp-icon-privacy.component.css'
})
export class XpIconPrivacyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
