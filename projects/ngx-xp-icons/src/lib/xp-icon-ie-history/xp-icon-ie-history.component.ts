
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-history',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-history.component.html',
  styleUrl: './xp-icon-ie-history.component.css'
})
export class XpIconIeHistoryComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
