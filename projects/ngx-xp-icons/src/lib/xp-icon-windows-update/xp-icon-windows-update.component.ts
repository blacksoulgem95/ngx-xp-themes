
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-update',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-windows-update.component.html',
  styleUrl: './xp-icon-windows-update.component.css'
})
export class XpIconWindowsUpdateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
