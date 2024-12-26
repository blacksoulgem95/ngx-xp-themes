
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-direct-x',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-direct-x.component.html',
  styleUrl: './xp-icon-direct-x.component.css'
})
export class XpIconDirectXComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
