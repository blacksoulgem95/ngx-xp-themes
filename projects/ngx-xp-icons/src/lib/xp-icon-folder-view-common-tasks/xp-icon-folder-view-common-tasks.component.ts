
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-folder-view-common-tasks',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-folder-view-common-tasks.component.html',
  styleUrl: './xp-icon-folder-view-common-tasks.component.css'
})
export class XpIconFolderViewCommonTasksComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
