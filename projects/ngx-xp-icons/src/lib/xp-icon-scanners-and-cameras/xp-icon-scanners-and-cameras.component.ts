
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-scanners-and-cameras',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-scanners-and-cameras.component.html',
  styleUrl: './xp-icon-scanners-and-cameras.component.css'
})
export class XpIconScannersAndCamerasComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
