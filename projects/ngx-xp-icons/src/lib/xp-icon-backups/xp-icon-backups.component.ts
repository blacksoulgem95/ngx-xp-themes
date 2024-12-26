
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-backups',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-backups.component.html',
  styleUrl: './xp-icon-backups.component.css'
})
export class XpIconBackupsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
