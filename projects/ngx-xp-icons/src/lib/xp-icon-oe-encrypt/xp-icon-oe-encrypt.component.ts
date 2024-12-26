
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-encrypt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-encrypt.component.html',
  styleUrl: './xp-icon-oe-encrypt.component.css'
})
export class XpIconOeEncryptComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
