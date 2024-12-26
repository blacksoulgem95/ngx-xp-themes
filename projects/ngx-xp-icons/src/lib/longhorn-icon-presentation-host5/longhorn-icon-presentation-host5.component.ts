
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-presentation-host5',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-presentation-host5.component.html',
  styleUrl: './longhorn-icon-presentation-host5.component.css'
})
export class LonghornIconPresentationHost5Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
