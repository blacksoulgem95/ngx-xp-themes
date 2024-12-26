
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-configure-your-server-wizard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-configure-your-server-wizard.component.html',
  styleUrl: './xp-icon-configure-your-server-wizard.component.css'
})
export class XpIconConfigureYourServerWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
