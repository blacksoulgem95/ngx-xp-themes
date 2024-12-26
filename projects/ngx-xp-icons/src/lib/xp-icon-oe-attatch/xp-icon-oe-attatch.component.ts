
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-attatch',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-attatch.component.html',
  styleUrl: './xp-icon-oe-attatch.component.css'
})
export class XpIconOeAttatchComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
