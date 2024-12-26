
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-copy-to',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-copy-to.component.html',
  styleUrl: './xp-icon-copy-to.component.css'
})
export class XpIconCopyToComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
