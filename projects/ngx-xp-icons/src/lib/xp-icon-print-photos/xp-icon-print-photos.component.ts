
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-print-photos',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-print-photos.component.html',
  styleUrl: './xp-icon-print-photos.component.css'
})
export class XpIconPrintPhotosComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
