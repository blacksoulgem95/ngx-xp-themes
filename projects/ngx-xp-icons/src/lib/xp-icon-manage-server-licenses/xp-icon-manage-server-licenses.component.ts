
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-manage-server-licenses',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-manage-server-licenses.component.html',
  styleUrl: './xp-icon-manage-server-licenses.component.css'
})
export class XpIconManageServerLicensesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
