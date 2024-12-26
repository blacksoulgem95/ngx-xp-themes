
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-jaz-drive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-jaz-drive.component.html',
  styleUrl: './xp-icon-jaz-drive.component.css'
})
export class XpIconJazDriveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
