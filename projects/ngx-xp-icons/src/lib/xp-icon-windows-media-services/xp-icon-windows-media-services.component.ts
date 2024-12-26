
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-media-services',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-media-services.component.html',
  styleUrl: './xp-icon-windows-media-services.component.css'
})
export class XpIconWindowsMediaServicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
