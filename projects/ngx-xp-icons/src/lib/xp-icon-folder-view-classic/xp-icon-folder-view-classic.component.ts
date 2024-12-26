
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-folder-view-classic',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-folder-view-classic.component.html',
  styleUrl: './xp-icon-folder-view-classic.component.css'
})
export class XpIconFolderViewClassicComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
