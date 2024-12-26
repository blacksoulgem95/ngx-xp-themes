
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-folder-opened',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-folder-opened.component.html',
  styleUrl: './xp-icon-folder-opened.component.css'
})
export class XpIconFolderOpenedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
