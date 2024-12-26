
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-applications-winrar3',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './applications-icon-winrar3.component.html',
  styleUrl: './applications-icon-winrar3.component.css'
})
export class ApplicationsIconWinrar3Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
