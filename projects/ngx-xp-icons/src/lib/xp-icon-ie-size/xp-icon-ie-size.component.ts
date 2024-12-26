
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-size',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-size.component.html',
  styleUrl: './xp-icon-ie-size.component.css'
})
export class XpIconIeSizeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
