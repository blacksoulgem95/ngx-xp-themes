
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-detail-view',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-detail-view.component.html',
  styleUrl: './xp-icon-detail-view.component.css'
})
export class XpIconDetailViewComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
