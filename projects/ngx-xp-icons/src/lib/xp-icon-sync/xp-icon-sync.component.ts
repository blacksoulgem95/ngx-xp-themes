
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sync',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sync.component.html',
  styleUrl: './xp-icon-sync.component.css'
})
export class XpIconSyncComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
