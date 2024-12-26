
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-memory-stick-with-magic-gate',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-memory-stick-with-magic-gate.component.html',
  styleUrl: './xp-icon-memory-stick-with-magic-gate.component.css'
})
export class XpIconMemoryStickWithMagicGateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
