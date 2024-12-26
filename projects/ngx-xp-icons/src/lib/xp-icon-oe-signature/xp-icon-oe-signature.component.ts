
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-signature',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-signature.component.html',
  styleUrl: './xp-icon-oe-signature.component.css'
})
export class XpIconOeSignatureComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
