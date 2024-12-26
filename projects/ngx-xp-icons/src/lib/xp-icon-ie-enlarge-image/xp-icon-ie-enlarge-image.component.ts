
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-enlarge-image',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-enlarge-image.component.html',
  styleUrl: './xp-icon-ie-enlarge-image.component.css'
})
export class XpIconIeEnlargeImageComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
