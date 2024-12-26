
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-battery-backup',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-battery-backup.component.html',
  styleUrl: './xp-icon-battery-backup.component.css'
})
export class XpIconBatteryBackupComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
