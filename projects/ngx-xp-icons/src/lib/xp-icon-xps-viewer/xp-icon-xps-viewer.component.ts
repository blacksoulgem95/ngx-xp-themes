
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-xps-viewer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-xps-viewer.component.html',
  styleUrl: './xp-icon-xps-viewer.component.css'
})
export class XpIconXpsViewerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
