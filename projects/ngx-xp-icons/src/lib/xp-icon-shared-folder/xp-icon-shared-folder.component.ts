
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-shared-folder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-shared-folder.component.html',
  styleUrl: './xp-icon-shared-folder.component.css'
})
export class XpIconSharedFolderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
