
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-my-pictures',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-my-pictures.component.html',
  styleUrl: './xp-icon-my-pictures.component.css'
})
export class XpIconMyPicturesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
