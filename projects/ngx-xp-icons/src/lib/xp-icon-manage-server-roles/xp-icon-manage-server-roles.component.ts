
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-manage-server-roles',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-manage-server-roles.component.html',
  styleUrl: './xp-icon-manage-server-roles.component.css'
})
export class XpIconManageServerRolesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
