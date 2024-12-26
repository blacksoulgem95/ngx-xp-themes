
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-blg',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-blg.component.html',
  styleUrl: './xp-icon-blg.component.css'
})
export class XpIconBlgComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
