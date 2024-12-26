
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-setup',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-setup.component.html',
  styleUrl: './xp-icon-setup.component.css'
})
export class XpIconSetupComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
