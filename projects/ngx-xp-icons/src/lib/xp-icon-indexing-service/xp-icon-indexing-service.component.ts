
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-indexing-service',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-indexing-service.component.html',
  styleUrl: './xp-icon-indexing-service.component.css'
})
export class XpIconIndexingServiceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
