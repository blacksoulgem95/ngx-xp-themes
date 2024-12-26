
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-copy',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-copy.component.html',
  styleUrl: './xp-icon-copy.component.css'
})
export class XpIconCopyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
