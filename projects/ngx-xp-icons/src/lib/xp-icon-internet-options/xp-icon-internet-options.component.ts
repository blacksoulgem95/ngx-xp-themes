
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-options',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-options.component.html',
  styleUrl: './xp-icon-internet-options.component.css'
})
export class XpIconInternetOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
