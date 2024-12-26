
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-applications-pdf-file',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './applications-icon-pdf-file.component.html',
  styleUrl: './applications-icon-pdf-file.component.css'
})
export class ApplicationsIconPdfFileComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
