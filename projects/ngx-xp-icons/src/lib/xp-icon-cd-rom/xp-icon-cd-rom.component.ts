
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-cd-rom',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-cd-rom.component.html',
  styleUrl: './xp-icon-cd-rom.component.css'
})
export class XpIconCdRomComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
