
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-change-language',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-change-language.component.html',
  styleUrl: './xp-icon-change-language.component.css'
})
export class XpIconChangeLanguageComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
