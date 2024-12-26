
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-refresh',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-ie-refresh.component.html',
  styleUrl: './whistler-icon-ie-refresh.component.css'
})
export class WhistlerIconIeRefreshComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
