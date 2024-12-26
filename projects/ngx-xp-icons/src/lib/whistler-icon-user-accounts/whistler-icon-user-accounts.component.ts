
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-user-accounts',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-user-accounts.component.html',
  styleUrl: './whistler-icon-user-accounts.component.css'
})
export class WhistlerIconUserAccountsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
