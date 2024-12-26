
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-history',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-ie-history.component.html',
  styleUrl: './whistler-icon-ie-history.component.css'
})
export class WhistlerIconIeHistoryComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
