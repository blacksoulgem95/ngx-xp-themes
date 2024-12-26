
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-font-similarity-view',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-font-similarity-view.component.html',
  styleUrl: './xp-icon-font-similarity-view.component.css'
})
export class XpIconFontSimilarityViewComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
