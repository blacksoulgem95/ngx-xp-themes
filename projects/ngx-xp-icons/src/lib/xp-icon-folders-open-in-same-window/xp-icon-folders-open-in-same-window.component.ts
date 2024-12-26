
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-folders-open-in-same-window',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-folders-open-in-same-window.component.html',
  styleUrl: './xp-icon-folders-open-in-same-window.component.css'
})
export class XpIconFoldersOpenInSameWindowComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
