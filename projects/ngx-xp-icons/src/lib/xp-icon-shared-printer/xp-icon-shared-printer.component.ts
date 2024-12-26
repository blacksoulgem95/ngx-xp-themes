
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-shared-printer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-shared-printer.component.html',
  styleUrl: './xp-icon-shared-printer.component.css'
})
export class XpIconSharedPrinterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
