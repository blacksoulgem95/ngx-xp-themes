
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-inf',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-inf.component.html',
  styleUrl: './xp-icon-inf.component.css'
})
export class XpIconInfComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
