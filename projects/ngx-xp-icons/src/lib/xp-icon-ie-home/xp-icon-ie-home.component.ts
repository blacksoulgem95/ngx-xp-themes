
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-home',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-home.component.html',
  styleUrl: './xp-icon-ie-home.component.css'
})
export class XpIconIeHomeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
