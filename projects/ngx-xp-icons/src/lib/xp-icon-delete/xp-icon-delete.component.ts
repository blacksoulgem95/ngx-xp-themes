
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-delete',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-delete.component.html',
  styleUrl: './xp-icon-delete.component.css'
})
export class XpIconDeleteComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
