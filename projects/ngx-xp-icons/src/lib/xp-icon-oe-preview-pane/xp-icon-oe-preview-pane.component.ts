
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-preview-pane',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-preview-pane.component.html',
  styleUrl: './xp-icon-oe-preview-pane.component.css'
})
export class XpIconOePreviewPaneComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
