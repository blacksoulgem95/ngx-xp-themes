
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-missing-setup-information',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-missing-setup-information.component.html',
  styleUrl: './xp-icon-missing-setup-information.component.css'
})
export class XpIconMissingSetupInformationComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
