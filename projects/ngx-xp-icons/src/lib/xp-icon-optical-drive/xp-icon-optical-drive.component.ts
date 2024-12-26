
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-optical-drive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-optical-drive.component.html',
  styleUrl: './xp-icon-optical-drive.component.css'
})
export class XpIconOpticalDriveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
