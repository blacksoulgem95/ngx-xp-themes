
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-spider-solitaire',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-spider-solitaire.component.html',
  styleUrl: './xp-icon-spider-solitaire.component.css'
})
export class XpIconSpiderSolitaireComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
