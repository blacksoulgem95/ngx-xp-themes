
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-favorites',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-favorites.component.html',
  styleUrl: './xp-icon-favorites.component.css'
})
export class XpIconFavoritesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
