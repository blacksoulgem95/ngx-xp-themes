
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-activation',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-activation.component.html',
  styleUrl: './xp-icon-activation.component.css'
})
export class XpIconActivationComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
