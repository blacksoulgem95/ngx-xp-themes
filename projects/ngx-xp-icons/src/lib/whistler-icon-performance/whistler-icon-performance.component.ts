
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-performance',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-performance.component.html',
  styleUrl: './whistler-icon-performance.component.css'
})
export class WhistlerIconPerformanceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
