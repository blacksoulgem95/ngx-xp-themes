
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-print-to-file',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-print-to-file.component.html',
  styleUrl: './xp-icon-print-to-file.component.css'
})
export class XpIconPrintToFileComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
