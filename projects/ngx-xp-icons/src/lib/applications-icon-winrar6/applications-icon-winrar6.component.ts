
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-applications-winrar6',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './applications-icon-winrar6.component.html',
  styleUrl: './applications-icon-winrar6.component.css'
})
export class ApplicationsIconWinrar6Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
