
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-applications-acrobat-installer',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './applications-icon-acrobat-installer.component.html',
  styleUrl: './applications-icon-acrobat-installer.component.css'
})
export class ApplicationsIconAcrobatInstallerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
