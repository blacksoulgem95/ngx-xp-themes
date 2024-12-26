
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-cover-page-editor',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-cover-page-editor.component.html',
  styleUrl: './xp-icon-cover-page-editor.component.css'
})
export class XpIconCoverPageEditorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
