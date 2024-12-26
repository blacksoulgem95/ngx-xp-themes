
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-generic-text-document',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-generic-text-document.component.html',
  styleUrl: './xp-icon-generic-text-document.component.css'
})
export class XpIconGenericTextDocumentComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
