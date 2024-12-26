
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-new-internet-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-new-internet-connection.component.html',
  styleUrl: './xp-icon-new-internet-connection.component.css'
})
export class XpIconNewInternetConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
