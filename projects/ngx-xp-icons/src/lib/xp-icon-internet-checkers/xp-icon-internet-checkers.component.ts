
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-checkers',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-checkers.component.html',
  styleUrl: './xp-icon-internet-checkers.component.css'
})
export class XpIconInternetCheckersComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
