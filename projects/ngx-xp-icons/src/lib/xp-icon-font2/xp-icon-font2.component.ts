
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-font2',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-font2.component.html',
  styleUrl: './xp-icon-font2.component.css'
})
export class XpIconFont2Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
