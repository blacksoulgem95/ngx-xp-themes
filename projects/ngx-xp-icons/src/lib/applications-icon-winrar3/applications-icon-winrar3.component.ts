
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-applications-winrar3',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './applications-icon-winrar3.component.html',
  styleUrl: './applications-icon-winrar3.component.css'
})
export class ApplicationsIconWinrar3Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
