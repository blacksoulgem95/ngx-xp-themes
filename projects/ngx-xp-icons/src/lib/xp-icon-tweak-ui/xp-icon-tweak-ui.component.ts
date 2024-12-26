
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-tweak-ui',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-tweak-ui.component.html',
  styleUrl: './xp-icon-tweak-ui.component.css'
})
export class XpIconTweakUiComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
