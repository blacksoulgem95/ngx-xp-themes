
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-copy-to-disc',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-copy-to-disc.component.html',
  styleUrl: './xp-icon-copy-to-disc.component.css'
})
export class XpIconCopyToDiscComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
