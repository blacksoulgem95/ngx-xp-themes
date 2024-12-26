
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-command-prompt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-command-prompt.component.html',
  styleUrl: './xp-icon-command-prompt.component.css'
})
export class XpIconCommandPromptComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
