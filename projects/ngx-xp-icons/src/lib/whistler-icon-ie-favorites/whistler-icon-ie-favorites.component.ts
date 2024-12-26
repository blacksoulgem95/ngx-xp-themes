
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-favorites',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-ie-favorites.component.html',
  styleUrl: './whistler-icon-ie-favorites.component.css'
})
export class WhistlerIconIeFavoritesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
