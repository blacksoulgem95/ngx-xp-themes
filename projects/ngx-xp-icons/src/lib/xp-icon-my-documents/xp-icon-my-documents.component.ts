
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-my-documents',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-my-documents.component.html',
  styleUrl: './xp-icon-my-documents.component.css'
})
export class XpIconMyDocumentsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
