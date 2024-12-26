
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-record',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-record.component.html',
  styleUrl: './xp-icon-record.component.css'
})
export class XpIconRecordComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
