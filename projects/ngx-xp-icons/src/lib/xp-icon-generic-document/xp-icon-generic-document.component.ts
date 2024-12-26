
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-generic-document',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-generic-document.component.html',
  styleUrl: './xp-icon-generic-document.component.css'
})
export class XpIconGenericDocumentComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
