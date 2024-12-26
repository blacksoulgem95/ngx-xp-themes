
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-narrator',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-narrator.component.html',
  styleUrl: './xp-icon-narrator.component.css'
})
export class XpIconNarratorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
