
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-camcorder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-camcorder.component.html',
  styleUrl: './xp-icon-camcorder.component.css'
})
export class XpIconCamcorderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
