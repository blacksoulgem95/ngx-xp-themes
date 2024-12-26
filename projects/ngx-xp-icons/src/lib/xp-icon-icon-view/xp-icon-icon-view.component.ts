
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-icon-view',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-icon-view.component.html',
  styleUrl: './xp-icon-icon-view.component.css'
})
export class XpIconIconViewComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
