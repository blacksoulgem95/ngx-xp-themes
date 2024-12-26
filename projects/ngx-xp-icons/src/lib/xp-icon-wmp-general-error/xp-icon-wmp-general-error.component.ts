
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-general-error',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-general-error.component.html',
  styleUrl: './xp-icon-wmp-general-error.component.css'
})
export class XpIconWmpGeneralErrorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
