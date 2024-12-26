
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-setup-skip',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-setup-skip.component.html',
  styleUrl: './xp-icon-setup-skip.component.css'
})
export class XpIconSetupSkipComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
