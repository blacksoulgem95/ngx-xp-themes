
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-synchronize',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-synchronize.component.html',
  styleUrl: './xp-icon-synchronize.component.css'
})
export class XpIconSynchronizeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
