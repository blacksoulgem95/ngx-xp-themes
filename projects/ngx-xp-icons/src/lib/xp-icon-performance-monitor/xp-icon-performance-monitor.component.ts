
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-performance-monitor',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-performance-monitor.component.html',
  styleUrl: './xp-icon-performance-monitor.component.css'
})
export class XpIconPerformanceMonitorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
