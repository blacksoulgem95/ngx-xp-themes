
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-file-and-settings-transfer-wizard',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-file-and-settings-transfer-wizard.component.html',
  styleUrl: './xp-icon-file-and-settings-transfer-wizard.component.css'
})
export class XpIconFileAndSettingsTransferWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
