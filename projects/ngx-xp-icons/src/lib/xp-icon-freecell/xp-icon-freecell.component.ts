
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-freecell',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-freecell.component.html',
  styleUrl: './xp-icon-freecell.component.css'
})
export class XpIconFreecellComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
