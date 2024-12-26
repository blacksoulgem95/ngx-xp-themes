
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-media',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-media.component.html',
  styleUrl: './xp-icon-ie-media.component.css'
})
export class XpIconIeMediaComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
