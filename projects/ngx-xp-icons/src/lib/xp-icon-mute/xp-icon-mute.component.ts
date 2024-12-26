
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-mute',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-mute.component.html',
  styleUrl: './xp-icon-mute.component.css'
})
export class XpIconMuteComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
