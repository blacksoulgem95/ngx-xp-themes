
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-new-printer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-new-printer.component.html',
  styleUrl: './xp-icon-new-printer.component.css'
})
export class XpIconNewPrinterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
