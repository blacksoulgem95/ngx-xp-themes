
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-paste',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-paste.component.html',
  styleUrl: './xp-icon-paste.component.css'
})
export class XpIconPasteComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
