
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-explorer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-explorer.component.html',
  styleUrl: './xp-icon-explorer.component.css'
})
export class XpIconExplorerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
