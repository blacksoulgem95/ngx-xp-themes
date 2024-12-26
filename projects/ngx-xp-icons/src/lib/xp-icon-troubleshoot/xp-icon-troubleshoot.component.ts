
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-troubleshoot',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-troubleshoot.component.html',
  styleUrl: './xp-icon-troubleshoot.component.css'
})
export class XpIconTroubleshootComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
