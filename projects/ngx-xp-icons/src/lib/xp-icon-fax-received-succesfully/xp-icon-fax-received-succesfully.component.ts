
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-received-succesfully',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax-received-succesfully.component.html',
  styleUrl: './xp-icon-fax-received-succesfully.component.css'
})
export class XpIconFaxReceivedSuccesfullyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
