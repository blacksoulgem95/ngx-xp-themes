
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-forward',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-forward.component.html',
  styleUrl: './xp-icon-forward.component.css'
})
export class XpIconForwardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
