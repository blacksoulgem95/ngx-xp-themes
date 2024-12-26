
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-msn-email',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-msn-email.component.html',
  styleUrl: './xp-icon-msn-email.component.css'
})
export class XpIconMsnEmailComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
