
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-full-screen',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-full-screen.component.html',
  styleUrl: './xp-icon-full-screen.component.css'
})
export class XpIconFullScreenComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
