
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-uddi-services',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-uddi-services.component.html',
  styleUrl: './xp-icon-uddi-services.component.css'
})
export class XpIconUddiServicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
