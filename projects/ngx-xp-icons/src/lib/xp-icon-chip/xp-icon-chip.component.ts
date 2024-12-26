
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-chip',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-chip.component.html',
  styleUrl: './xp-icon-chip.component.css'
})
export class XpIconChipComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
