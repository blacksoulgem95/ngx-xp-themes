
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-single-click',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-single-click.component.html',
  styleUrl: './xp-icon-single-click.component.css'
})
export class XpIconSingleClickComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
