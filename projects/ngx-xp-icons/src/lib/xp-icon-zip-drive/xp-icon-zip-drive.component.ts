
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-zip-drive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-zip-drive.component.html',
  styleUrl: './xp-icon-zip-drive.component.css'
})
export class XpIconZipDriveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
