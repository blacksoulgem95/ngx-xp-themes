
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-file-and-settings-transfer-wizard',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-file-and-settings-transfer-wizard.component.html',
  styleUrl: './xp-icon-file-and-settings-transfer-wizard.component.css'
})
export class XpIconFileAndSettingsTransferWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
