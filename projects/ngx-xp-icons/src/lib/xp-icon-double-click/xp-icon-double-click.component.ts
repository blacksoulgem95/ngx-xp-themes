
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-double-click',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-double-click.component.html',
  styleUrl: './xp-icon-double-click.component.css'
})
export class XpIconDoubleClickComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
