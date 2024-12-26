
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmv2',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmv2.component.html',
  styleUrl: './xp-icon-wmv2.component.css'
})
export class XpIconWmv2Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
