
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-input-panel',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-input-panel.component.html',
  styleUrl: './xp-icon-input-panel.component.css'
})
export class XpIconInputPanelComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
