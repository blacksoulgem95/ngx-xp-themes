
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-folders-open-in-new-window',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-folders-open-in-new-window.component.html',
  styleUrl: './xp-icon-folders-open-in-new-window.component.css'
})
export class XpIconFoldersOpenInNewWindowComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
