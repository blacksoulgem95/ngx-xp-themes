
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-services',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-services.component.html',
  styleUrl: './xp-icon-services.component.css'
})
export class XpIconServicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
