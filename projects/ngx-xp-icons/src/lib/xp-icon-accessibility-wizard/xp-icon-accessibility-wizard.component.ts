
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-accessibility-wizard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-accessibility-wizard.component.html',
  styleUrl: './xp-icon-accessibility-wizard.component.css'
})
export class XpIconAccessibilityWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
