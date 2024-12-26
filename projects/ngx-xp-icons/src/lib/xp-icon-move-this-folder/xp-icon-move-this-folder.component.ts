
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-move-this-folder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-move-this-folder.component.html',
  styleUrl: './xp-icon-move-this-folder.component.css'
})
export class XpIconMoveThisFolderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
