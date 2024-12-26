
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-support-topic',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-support-topic.component.html',
  styleUrl: './xp-icon-support-topic.component.css'
})
export class XpIconSupportTopicComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
