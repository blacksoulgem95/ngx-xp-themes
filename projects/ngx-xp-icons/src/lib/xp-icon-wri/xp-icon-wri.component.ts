
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wri',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wri.component.html',
  styleUrl: './xp-icon-wri.component.css'
})
export class XpIconWriComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
