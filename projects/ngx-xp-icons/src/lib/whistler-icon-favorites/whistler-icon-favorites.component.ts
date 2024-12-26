
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-favorites',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-favorites.component.html',
  styleUrl: './whistler-icon-favorites.component.css'
})
export class WhistlerIconFavoritesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
