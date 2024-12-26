
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-lock',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-lock.component.html',
  styleUrl: './xp-icon-lock.component.css'
})
export class XpIconLockComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
