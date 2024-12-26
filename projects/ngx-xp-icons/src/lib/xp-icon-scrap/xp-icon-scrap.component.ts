
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-scrap',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-scrap.component.html',
  styleUrl: './xp-icon-scrap.component.css'
})
export class XpIconScrapComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
