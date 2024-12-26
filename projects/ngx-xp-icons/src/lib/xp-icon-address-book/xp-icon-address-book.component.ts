
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-address-book',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-address-book.component.html',
  styleUrl: './xp-icon-address-book.component.css'
})
export class XpIconAddressBookComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
