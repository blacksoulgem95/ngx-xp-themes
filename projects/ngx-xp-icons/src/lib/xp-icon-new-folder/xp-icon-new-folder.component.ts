
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-new-folder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-new-folder.component.html',
  styleUrl: './xp-icon-new-folder.component.css'
})
export class XpIconNewFolderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
