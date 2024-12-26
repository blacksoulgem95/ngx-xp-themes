
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-pop-up-information',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-pop-up-information.component.html',
  styleUrl: './xp-icon-pop-up-information.component.css'
})
export class XpIconPopUpInformationComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
