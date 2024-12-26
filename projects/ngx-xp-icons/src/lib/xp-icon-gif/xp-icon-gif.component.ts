
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-gif',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-gif.component.html',
  styleUrl: './xp-icon-gif.component.css'
})
export class XpIconGifComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
