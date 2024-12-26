
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-administrative-tools',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-administrative-tools.component.html',
  styleUrl: './xp-icon-administrative-tools.component.css'
})
export class XpIconAdministrativeToolsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
