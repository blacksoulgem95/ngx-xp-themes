
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-smart-card-reader',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-smart-card-reader.component.html',
  styleUrl: './xp-icon-smart-card-reader.component.css'
})
export class XpIconSmartCardReaderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
