
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-xpsp3-res-unknown2',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-xpsp3-res-unknown2.component.html',
  styleUrl: './xp-icon-xpsp3-res-unknown2.component.css'
})
export class XpIconXpsp3ResUnknown2Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
