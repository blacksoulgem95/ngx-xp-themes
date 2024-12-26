
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-longhorn-presentation-host',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './longhorn-icon-presentation-host.component.html',
  styleUrl: './longhorn-icon-presentation-host.component.css'
})
export class LonghornIconPresentationHostComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
