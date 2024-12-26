
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-txt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-txt.component.html',
  styleUrl: './xp-icon-txt.component.css'
})
export class XpIconTxtComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
