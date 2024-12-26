
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-true-type',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-true-type.component.html',
  styleUrl: './xp-icon-true-type.component.css'
})
export class XpIconTrueTypeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
