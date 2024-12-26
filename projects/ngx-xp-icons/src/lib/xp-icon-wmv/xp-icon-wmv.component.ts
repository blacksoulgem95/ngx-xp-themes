
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmv',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmv.component.html',
  styleUrl: './xp-icon-wmv.component.css'
})
export class XpIconWmvComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
