
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-success',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-success.component.html',
  styleUrl: './xp-icon-success.component.css'
})
export class XpIconSuccessComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
