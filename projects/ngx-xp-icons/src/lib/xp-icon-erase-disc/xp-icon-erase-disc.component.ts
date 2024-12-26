
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-erase-disc',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-erase-disc.component.html',
  styleUrl: './xp-icon-erase-disc.component.css'
})
export class XpIconEraseDiscComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
