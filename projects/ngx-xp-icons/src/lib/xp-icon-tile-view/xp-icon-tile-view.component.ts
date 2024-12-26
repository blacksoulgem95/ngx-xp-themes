
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-tile-view',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-tile-view.component.html',
  styleUrl: './xp-icon-tile-view.component.css'
})
export class XpIconTileViewComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
