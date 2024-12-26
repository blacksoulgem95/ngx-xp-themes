
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-control-panel',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-control-panel.component.html',
  styleUrl: './xp-icon-control-panel.component.css'
})
export class XpIconControlPanelComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
