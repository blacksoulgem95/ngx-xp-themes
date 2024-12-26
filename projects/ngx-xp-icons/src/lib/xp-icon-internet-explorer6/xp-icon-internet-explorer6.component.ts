
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-explorer6',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-explorer6.component.html',
  styleUrl: './xp-icon-internet-explorer6.component.css'
})
export class XpIconInternetExplorer6Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
