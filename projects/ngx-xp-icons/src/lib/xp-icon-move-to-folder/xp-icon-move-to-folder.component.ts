
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-move-to-folder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-move-to-folder.component.html',
  styleUrl: './xp-icon-move-to-folder.component.css'
})
export class XpIconMoveToFolderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
