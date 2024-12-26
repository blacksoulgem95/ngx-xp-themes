
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sort-by-date',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sort-by-date.component.html',
  styleUrl: './xp-icon-sort-by-date.component.css'
})
export class XpIconSortByDateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
