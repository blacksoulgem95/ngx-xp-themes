
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-picture-and-fax-viewer',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-windows-picture-and-fax-viewer.component.html',
  styleUrl: './xp-icon-windows-picture-and-fax-viewer.component.css'
})
export class XpIconWindowsPictureAndFaxViewerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
