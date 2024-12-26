
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-true-type2',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-true-type2.component.html',
  styleUrl: './xp-icon-true-type2.component.css'
})
export class XpIconTrueType2Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
