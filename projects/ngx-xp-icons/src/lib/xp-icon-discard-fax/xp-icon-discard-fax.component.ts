
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-discard-fax',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-discard-fax.component.html',
  styleUrl: './xp-icon-discard-fax.component.css'
})
export class XpIconDiscardFaxComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
