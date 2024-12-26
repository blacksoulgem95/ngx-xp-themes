
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-add',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-add.component.html',
  styleUrl: './xp-icon-add.component.css'
})
export class XpIconAddComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
