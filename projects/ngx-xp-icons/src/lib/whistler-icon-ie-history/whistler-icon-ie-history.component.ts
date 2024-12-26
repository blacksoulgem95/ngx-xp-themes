
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-history',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './whistler-icon-ie-history.component.html',
  styleUrl: './whistler-icon-ie-history.component.css'
})
export class WhistlerIconIeHistoryComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
