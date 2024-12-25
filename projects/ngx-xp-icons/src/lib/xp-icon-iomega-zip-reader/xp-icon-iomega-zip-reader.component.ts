
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-iomega-zip-reader',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-iomega-zip-reader.component.html',
  styleUrl: './xp-icon-iomega-zip-reader.component.css'
})
export class XpIconIomegaZipReaderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
