
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-appearance',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-appearance.component.html',
  styleUrl: './xp-icon-appearance.component.css'
})
export class XpIconAppearanceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
