
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-sort-alphabetically',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-sort-alphabetically.component.html',
  styleUrl: './xp-icon-sort-alphabetically.component.css'
})
export class XpIconSortAlphabeticallyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
