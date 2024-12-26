
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-microsoft-active-sync',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-microsoft-active-sync.component.html',
  styleUrl: './xp-icon-microsoft-active-sync.component.css'
})
export class XpIconMicrosoftActiveSyncComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
