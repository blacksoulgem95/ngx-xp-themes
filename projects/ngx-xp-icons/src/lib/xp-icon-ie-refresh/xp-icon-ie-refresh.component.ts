
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-refresh',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-refresh.component.html',
  styleUrl: './xp-icon-ie-refresh.component.css'
})
export class XpIconIeRefreshComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
