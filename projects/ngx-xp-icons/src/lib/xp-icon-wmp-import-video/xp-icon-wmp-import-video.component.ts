
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-import-video',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-import-video.component.html',
  styleUrl: './xp-icon-wmp-import-video.component.css'
})
export class XpIconWmpImportVideoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
