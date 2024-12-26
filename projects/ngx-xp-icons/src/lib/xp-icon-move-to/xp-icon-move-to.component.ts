
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-move-to',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-move-to.component.html',
  styleUrl: './xp-icon-move-to.component.css'
})
export class XpIconMoveToComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
