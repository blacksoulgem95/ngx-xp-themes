
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-manage-your-server',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-manage-your-server.component.html',
  styleUrl: './xp-icon-manage-your-server.component.css'
})
export class XpIconManageYourServerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
