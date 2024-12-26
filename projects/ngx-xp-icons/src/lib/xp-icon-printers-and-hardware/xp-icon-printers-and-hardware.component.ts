
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-printers-and-hardware',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-printers-and-hardware.component.html',
  styleUrl: './xp-icon-printers-and-hardware.component.css'
})
export class XpIconPrintersAndHardwareComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
