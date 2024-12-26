
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-sent-succesfully',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax-sent-succesfully.component.html',
  styleUrl: './xp-icon-fax-sent-succesfully.component.css'
})
export class XpIconFaxSentSuccesfullyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
