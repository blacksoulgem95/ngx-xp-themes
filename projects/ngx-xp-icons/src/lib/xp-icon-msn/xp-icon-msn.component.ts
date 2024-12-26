
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-msn',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-msn.component.html',
  styleUrl: './xp-icon-msn.component.css'
})
export class XpIconMsnComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
