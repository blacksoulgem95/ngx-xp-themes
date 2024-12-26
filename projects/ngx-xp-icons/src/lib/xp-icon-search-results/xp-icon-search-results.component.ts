
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-search-results',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-search-results.component.html',
  styleUrl: './xp-icon-search-results.component.css'
})
export class XpIconSearchResultsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
