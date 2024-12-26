import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-applications-acrobat-installer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './applications-icon-acrobat-installer.component.html',
  styleUrl: './applications-icon-acrobat-installer.component.css'
})
export class ApplicationsIconAcrobatInstallerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
