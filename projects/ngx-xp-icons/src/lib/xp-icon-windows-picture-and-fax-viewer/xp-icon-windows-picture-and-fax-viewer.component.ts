
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-picture-and-fax-viewer',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-windows-picture-and-fax-viewer.component.html',
  styleUrl: './xp-icon-windows-picture-and-fax-viewer.component.css'
})
export class XpIconWindowsPictureAndFaxViewerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
