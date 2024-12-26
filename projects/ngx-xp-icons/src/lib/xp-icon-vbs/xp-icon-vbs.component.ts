
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-vbs',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-vbs.component.html',
  styleUrl: './xp-icon-vbs.component.css'
})
export class XpIconVbsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
