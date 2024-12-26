
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sync-all',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sync-all.component.html',
  styleUrl: './xp-icon-sync-all.component.css'
})
export class XpIconSyncAllComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
