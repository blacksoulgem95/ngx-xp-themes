
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-document-search',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-document-search.component.html',
  styleUrl: './xp-icon-document-search.component.css'
})
export class XpIconDocumentSearchComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
