
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-applications-klite-codec',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './applications-icon-klite-codec.component.html',
  styleUrl: './applications-icon-klite-codec.component.css'
})
export class ApplicationsIconKliteCodecComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
