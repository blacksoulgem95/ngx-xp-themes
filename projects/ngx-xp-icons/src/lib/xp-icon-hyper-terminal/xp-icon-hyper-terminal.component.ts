
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-hyper-terminal',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-hyper-terminal.component.html',
  styleUrl: './xp-icon-hyper-terminal.component.css'
})
export class XpIconHyperTerminalComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
