
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-auto-complete',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-auto-complete.component.html',
  styleUrl: './xp-icon-auto-complete.component.css'
})
export class XpIconAutoCompleteComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
