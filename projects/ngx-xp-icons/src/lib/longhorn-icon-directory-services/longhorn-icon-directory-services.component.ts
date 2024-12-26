
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-directory-services',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-directory-services.component.html',
  styleUrl: './longhorn-icon-directory-services.component.css'
})
export class LonghornIconDirectoryServicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
