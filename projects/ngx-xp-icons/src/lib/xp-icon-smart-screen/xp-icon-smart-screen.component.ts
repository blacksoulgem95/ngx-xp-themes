
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-smart-screen',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-smart-screen.component.html',
  styleUrl: './xp-icon-smart-screen.component.css'
})
export class XpIconSmartScreenComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
