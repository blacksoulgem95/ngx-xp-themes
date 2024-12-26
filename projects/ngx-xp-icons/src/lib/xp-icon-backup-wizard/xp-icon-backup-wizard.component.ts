
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-backup-wizard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-backup-wizard.component.html',
  styleUrl: './xp-icon-backup-wizard.component.css'
})
export class XpIconBackupWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
