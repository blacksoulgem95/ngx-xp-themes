
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-cache',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-cache.component.html',
  styleUrl: './xp-icon-wms-cache.component.css'
})
export class XpIconWmsCacheComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
