
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-discuss',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-discuss.component.html',
  styleUrl: './xp-icon-ie-discuss.component.css'
})
export class XpIconIeDiscussComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
