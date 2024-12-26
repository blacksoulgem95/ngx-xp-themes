
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-capture-screen',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wme-capture-screen.component.html',
  styleUrl: './xp-icon-wme-capture-screen.component.css'
})
export class XpIconWmeCaptureScreenComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
