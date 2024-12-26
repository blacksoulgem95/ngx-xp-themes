
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-pop-up-blocked',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-pop-up-blocked.component.html',
  styleUrl: './xp-icon-pop-up-blocked.component.css'
})
export class XpIconPopUpBlockedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
