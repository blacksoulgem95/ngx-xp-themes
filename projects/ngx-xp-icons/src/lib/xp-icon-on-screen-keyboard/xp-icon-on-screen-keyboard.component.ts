
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-on-screen-keyboard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-on-screen-keyboard.component.html',
  styleUrl: './xp-icon-on-screen-keyboard.component.css'
})
export class XpIconOnScreenKeyboardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
