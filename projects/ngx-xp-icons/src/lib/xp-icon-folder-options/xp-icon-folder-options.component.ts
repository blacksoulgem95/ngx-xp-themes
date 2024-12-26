
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-folder-options',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-folder-options.component.html',
  styleUrl: './xp-icon-folder-options.component.css'
})
export class XpIconFolderOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
