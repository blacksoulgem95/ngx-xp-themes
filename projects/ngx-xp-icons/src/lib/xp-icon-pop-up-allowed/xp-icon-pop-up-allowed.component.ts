
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-pop-up-allowed',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-pop-up-allowed.component.html',
  styleUrl: './xp-icon-pop-up-allowed.component.css'
})
export class XpIconPopUpAllowedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
