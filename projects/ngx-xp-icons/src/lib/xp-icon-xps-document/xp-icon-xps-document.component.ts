
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-xps-document',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-xps-document.component.html',
  styleUrl: './xp-icon-xps-document.component.css'
})
export class XpIconXpsDocumentComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
