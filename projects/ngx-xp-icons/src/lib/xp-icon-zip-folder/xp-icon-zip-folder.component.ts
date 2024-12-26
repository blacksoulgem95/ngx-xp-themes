
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-zip-folder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-zip-folder.component.html',
  styleUrl: './xp-icon-zip-folder.component.css'
})
export class XpIconZipFolderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
