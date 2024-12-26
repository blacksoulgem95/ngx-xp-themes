
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-iexpress',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-iexpress.component.html',
  styleUrl: './xp-icon-iexpress.component.css'
})
export class XpIconIexpressComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
