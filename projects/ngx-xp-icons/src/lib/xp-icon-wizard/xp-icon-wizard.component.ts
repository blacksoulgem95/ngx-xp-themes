
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wizard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wizard.component.html',
  styleUrl: './xp-icon-wizard.component.css'
})
export class XpIconWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
