
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-search',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-search.component.html',
  styleUrl: './xp-icon-search.component.css'
})
export class XpIconSearchComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
