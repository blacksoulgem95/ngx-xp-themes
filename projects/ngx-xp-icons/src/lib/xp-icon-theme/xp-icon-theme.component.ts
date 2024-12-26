
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-theme',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-theme.component.html',
  styleUrl: './xp-icon-theme.component.css'
})
export class XpIconThemeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
