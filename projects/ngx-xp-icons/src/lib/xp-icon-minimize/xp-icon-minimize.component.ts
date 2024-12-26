
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-minimize',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-minimize.component.html',
  styleUrl: './xp-icon-minimize.component.css'
})
export class XpIconMinimizeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
