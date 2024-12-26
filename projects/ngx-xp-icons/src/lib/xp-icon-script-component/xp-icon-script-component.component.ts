
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-script-component',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-script-component.component.html',
  styleUrl: './xp-icon-script-component.component.css'
})
export class XpIconScriptComponentComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
