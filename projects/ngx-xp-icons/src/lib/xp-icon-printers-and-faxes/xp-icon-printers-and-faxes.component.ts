
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-printers-and-faxes',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-printers-and-faxes.component.html',
  styleUrl: './xp-icon-printers-and-faxes.component.css'
})
export class XpIconPrintersAndFaxesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
