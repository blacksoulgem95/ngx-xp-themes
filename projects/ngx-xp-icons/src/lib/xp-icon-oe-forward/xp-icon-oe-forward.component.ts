
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-forward',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-forward.component.html',
  styleUrl: './xp-icon-oe-forward.component.css'
})
export class XpIconOeForwardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
