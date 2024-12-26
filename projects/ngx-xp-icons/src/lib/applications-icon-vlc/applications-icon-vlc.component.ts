
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-applications-vlc',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './applications-icon-vlc.component.html',
  styleUrl: './applications-icon-vlc.component.css'
})
export class ApplicationsIconVlcComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
