
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-thumbnail-view',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-thumbnail-view.component.html',
  styleUrl: './xp-icon-thumbnail-view.component.css'
})
export class XpIconThumbnailViewComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
