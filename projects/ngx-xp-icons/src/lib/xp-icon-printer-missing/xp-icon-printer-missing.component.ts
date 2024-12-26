
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-printer-missing',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-printer-missing.component.html',
  styleUrl: './xp-icon-printer-missing.component.css'
})
export class XpIconPrinterMissingComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
