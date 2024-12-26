
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-print-server-properties',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-print-server-properties.component.html',
  styleUrl: './xp-icon-print-server-properties.component.css'
})
export class XpIconPrintServerPropertiesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
