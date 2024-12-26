
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dll',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dll.component.html',
  styleUrl: './xp-icon-dll.component.css'
})
export class XpIconDllComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
