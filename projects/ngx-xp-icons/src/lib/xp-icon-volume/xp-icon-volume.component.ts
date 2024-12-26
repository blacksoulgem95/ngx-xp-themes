
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-volume',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-volume.component.html',
  styleUrl: './xp-icon-volume.component.css'
})
export class XpIconVolumeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
