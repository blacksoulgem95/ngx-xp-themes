
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-keyboard',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-keyboard.component.html',
  styleUrl: './xp-icon-keyboard.component.css'
})
export class XpIconKeyboardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
