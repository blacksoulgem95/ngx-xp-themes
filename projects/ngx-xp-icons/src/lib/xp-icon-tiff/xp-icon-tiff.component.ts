
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-tiff',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-tiff.component.html',
  styleUrl: './xp-icon-tiff.component.css'
})
export class XpIconTiffComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
