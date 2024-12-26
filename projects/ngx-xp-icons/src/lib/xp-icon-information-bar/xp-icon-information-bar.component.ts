
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-information-bar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-information-bar.component.html',
  styleUrl: './xp-icon-information-bar.component.css'
})
export class XpIconInformationBarComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
