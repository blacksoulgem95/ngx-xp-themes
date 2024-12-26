
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-setup-back',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-setup-back.component.html',
  styleUrl: './xp-icon-setup-back.component.css'
})
export class XpIconSetupBackComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
