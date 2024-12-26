
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-create-mail',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-create-mail.component.html',
  styleUrl: './xp-icon-oe-create-mail.component.css'
})
export class XpIconOeCreateMailComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
