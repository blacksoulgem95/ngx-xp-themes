
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-rating-star',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-rating-star.component.html',
  styleUrl: './xp-icon-rating-star.component.css'
})
export class XpIconRatingStarComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
