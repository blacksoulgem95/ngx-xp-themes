
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-click-to-record',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-click-to-record.component.html',
  styleUrl: './xp-icon-click-to-record.component.css'
})
export class XpIconClickToRecordComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
