
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-performance',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-performance.component.html',
  styleUrl: './xp-icon-wmp-performance.component.css'
})
export class XpIconWmpPerformanceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
