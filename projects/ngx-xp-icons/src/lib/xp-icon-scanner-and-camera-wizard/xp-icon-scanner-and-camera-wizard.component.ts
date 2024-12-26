
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-scanner-and-camera-wizard',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-scanner-and-camera-wizard.component.html',
  styleUrl: './xp-icon-scanner-and-camera-wizard.component.css'
})
export class XpIconScannerAndCameraWizardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
