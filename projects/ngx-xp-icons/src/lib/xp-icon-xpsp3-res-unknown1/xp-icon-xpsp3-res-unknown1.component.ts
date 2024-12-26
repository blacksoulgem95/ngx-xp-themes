
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-xpsp3-res-unknown1',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-xpsp3-res-unknown1.component.html',
  styleUrl: './xp-icon-xpsp3-res-unknown1.component.css'
})
export class XpIconXpsp3ResUnknown1Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
