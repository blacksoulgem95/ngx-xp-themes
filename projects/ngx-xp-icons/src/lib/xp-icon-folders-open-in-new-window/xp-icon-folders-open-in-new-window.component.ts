
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-folders-open-in-new-window',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-folders-open-in-new-window.component.html',
  styleUrl: './xp-icon-folders-open-in-new-window.component.css'
})
export class XpIconFoldersOpenInNewWindowComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
