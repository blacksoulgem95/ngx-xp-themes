
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-search',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-ie-search.component.html',
  styleUrl: './whistler-icon-ie-search.component.css'
})
export class WhistlerIconIeSearchComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
