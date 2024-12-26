
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-memory-stick',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-memory-stick.component.html',
  styleUrl: './xp-icon-memory-stick.component.css'
})
export class XpIconMemoryStickComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
