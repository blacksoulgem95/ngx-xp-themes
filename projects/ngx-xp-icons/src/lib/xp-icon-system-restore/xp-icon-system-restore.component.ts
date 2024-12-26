
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-system-restore',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-system-restore.component.html',
  styleUrl: './xp-icon-system-restore.component.css'
})
export class XpIconSystemRestoreComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
