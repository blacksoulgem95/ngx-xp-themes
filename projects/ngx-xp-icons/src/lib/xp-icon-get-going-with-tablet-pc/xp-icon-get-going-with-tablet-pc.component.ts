
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-get-going-with-tablet-pc',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-get-going-with-tablet-pc.component.html',
  styleUrl: './xp-icon-get-going-with-tablet-pc.component.css'
})
export class XpIconGetGoingWithTabletPcComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
