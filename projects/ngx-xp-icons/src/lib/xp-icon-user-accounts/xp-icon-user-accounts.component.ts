
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-user-accounts',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-user-accounts.component.html',
  styleUrl: './xp-icon-user-accounts.component.css'
})
export class XpIconUserAccountsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
