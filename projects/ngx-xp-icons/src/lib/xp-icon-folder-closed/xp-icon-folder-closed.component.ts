
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-folder-closed',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-folder-closed.component.html',
  styleUrl: './xp-icon-folder-closed.component.css'
})
export class XpIconFolderClosedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
