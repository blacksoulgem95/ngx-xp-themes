
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-go',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-go.component.html',
  styleUrl: './xp-icon-go.component.css'
})
export class XpIconGoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
