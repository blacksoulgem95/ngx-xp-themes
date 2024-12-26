
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-scanner',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-scanner.component.html',
  styleUrl: './xp-icon-scanner.component.css'
})
export class XpIconScannerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
