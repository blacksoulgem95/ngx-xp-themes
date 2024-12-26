
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-decode',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-decode.component.html',
  styleUrl: './xp-icon-oe-decode.component.css'
})
export class XpIconOeDecodeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
