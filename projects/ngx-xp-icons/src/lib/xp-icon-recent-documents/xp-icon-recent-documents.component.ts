
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-recent-documents',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-recent-documents.component.html',
  styleUrl: './xp-icon-recent-documents.component.css'
})
export class XpIconRecentDocumentsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
