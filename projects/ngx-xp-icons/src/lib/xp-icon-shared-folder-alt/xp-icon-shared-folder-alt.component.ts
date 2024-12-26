
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-shared-folder-alt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-shared-folder-alt.component.html',
  styleUrl: './xp-icon-shared-folder-alt.component.css'
})
export class XpIconSharedFolderAltComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
