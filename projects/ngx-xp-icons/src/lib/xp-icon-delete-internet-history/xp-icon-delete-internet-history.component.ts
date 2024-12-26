
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-delete-internet-history',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-delete-internet-history.component.html',
  styleUrl: './xp-icon-delete-internet-history.component.css'
})
export class XpIconDeleteInternetHistoryComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
