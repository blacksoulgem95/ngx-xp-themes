
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-printer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-printer.component.html',
  styleUrl: './xp-icon-printer.component.css'
})
export class XpIconPrinterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
