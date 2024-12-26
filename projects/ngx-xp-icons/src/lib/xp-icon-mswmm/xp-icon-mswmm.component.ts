
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-mswmm',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-mswmm.component.html',
  styleUrl: './xp-icon-mswmm.component.css'
})
export class XpIconMswmmComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
