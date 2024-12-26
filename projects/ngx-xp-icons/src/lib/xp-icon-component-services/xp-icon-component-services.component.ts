
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-component-services',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-component-services.component.html',
  styleUrl: './xp-icon-component-services.component.css'
})
export class XpIconComponentServicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
