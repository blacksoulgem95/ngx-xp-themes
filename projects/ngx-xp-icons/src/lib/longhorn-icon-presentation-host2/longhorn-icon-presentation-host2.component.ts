
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-presentation-host2',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-presentation-host2.component.html',
  styleUrl: './longhorn-icon-presentation-host2.component.css'
})
export class LonghornIconPresentationHost2Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
