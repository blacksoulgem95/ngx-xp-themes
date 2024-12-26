
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-search-for-people',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-search-for-people.component.html',
  styleUrl: './xp-icon-search-for-people.component.css'
})
export class XpIconSearchForPeopleComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
