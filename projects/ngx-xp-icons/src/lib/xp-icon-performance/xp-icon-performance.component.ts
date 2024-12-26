
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-performance',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-performance.component.html',
  styleUrl: './xp-icon-performance.component.css'
})
export class XpIconPerformanceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
