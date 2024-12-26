
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-connection-wizard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-connection-wizard.component.html',
  styleUrl: './xp-icon-internet-connection-wizard.component.css'
})
export class XpIconInternetConnectionWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
