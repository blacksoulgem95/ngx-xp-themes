
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-unknown-disc',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-unknown-disc.component.html',
  styleUrl: './xp-icon-unknown-disc.component.css'
})
export class XpIconUnknownDiscComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
