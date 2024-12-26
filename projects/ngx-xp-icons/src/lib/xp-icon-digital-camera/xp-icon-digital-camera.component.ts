
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-digital-camera',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-digital-camera.component.html',
  styleUrl: './xp-icon-digital-camera.component.css'
})
export class XpIconDigitalCameraComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
