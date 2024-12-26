
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-restore',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-restore.component.html',
  styleUrl: './xp-icon-restore.component.css'
})
export class XpIconRestoreComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
