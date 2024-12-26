
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-router',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-router.component.html',
  styleUrl: './xp-icon-router.component.css'
})
export class XpIconRouterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
