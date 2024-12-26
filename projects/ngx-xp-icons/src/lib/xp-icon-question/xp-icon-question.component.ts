
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-question',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-question.component.html',
  styleUrl: './xp-icon-question.component.css'
})
export class XpIconQuestionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
