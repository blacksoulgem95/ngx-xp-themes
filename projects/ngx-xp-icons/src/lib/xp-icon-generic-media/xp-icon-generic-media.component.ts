
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-generic-media',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-generic-media.component.html',
  styleUrl: './xp-icon-generic-media.component.css'
})
export class XpIconGenericMediaComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
