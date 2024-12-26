
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-solitaire',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-solitaire.component.html',
  styleUrl: './xp-icon-solitaire.component.css'
})
export class XpIconSolitaireComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
