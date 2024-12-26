
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sort-by-size',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sort-by-size.component.html',
  styleUrl: './xp-icon-sort-by-size.component.css'
})
export class XpIconSortBySizeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
