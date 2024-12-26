
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-removable-media',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-removable-media.component.html',
  styleUrl: './xp-icon-removable-media.component.css'
})
export class XpIconRemovableMediaComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
