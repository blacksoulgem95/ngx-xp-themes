
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-url',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-url.component.html',
  styleUrl: './xp-icon-url.component.css'
})
export class XpIconUrlComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
