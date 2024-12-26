
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-magnifier',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-magnifier.component.html',
  styleUrl: './xp-icon-magnifier.component.css'
})
export class XpIconMagnifierComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
