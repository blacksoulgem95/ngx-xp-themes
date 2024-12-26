
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-update',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-update.component.html',
  styleUrl: './xp-icon-windows-update.component.css'
})
export class XpIconWindowsUpdateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
