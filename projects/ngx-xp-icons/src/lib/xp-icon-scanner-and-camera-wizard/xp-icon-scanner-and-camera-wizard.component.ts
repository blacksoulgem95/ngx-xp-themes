
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-scanner-and-camera-wizard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-scanner-and-camera-wizard.component.html',
  styleUrl: './xp-icon-scanner-and-camera-wizard.component.css'
})
export class XpIconScannerAndCameraWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
