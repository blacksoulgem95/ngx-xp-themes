
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-microsoft-update',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-microsoft-update.component.html',
  styleUrl: './xp-icon-microsoft-update.component.css'
})
export class XpIconMicrosoftUpdateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
