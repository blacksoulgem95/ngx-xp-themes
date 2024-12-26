
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-tape-drive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-tape-drive.component.html',
  styleUrl: './xp-icon-tape-drive.component.css'
})
export class XpIconTapeDriveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
