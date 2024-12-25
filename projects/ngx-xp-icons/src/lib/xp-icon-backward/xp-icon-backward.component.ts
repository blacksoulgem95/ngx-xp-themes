
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-backward',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-backward.component.html',
  styleUrl: './xp-icon-backward.component.css'
})
export class XpIconBackwardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
