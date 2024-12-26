
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-control-panel',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-control-panel.component.html',
  styleUrl: './xp-icon-control-panel.component.css'
})
export class XpIconControlPanelComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
