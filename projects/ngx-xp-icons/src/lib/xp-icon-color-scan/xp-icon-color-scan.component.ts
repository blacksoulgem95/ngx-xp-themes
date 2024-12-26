
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-color-scan',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-color-scan.component.html',
  styleUrl: './xp-icon-color-scan.component.css'
})
export class XpIconColorScanComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
