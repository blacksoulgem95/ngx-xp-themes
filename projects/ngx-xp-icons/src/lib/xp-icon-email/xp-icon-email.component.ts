
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-email',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-email.component.html',
  styleUrl: './xp-icon-email.component.css'
})
export class XpIconEmailComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
